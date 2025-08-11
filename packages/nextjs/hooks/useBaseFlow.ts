import { useCallback, useState } from "react";
import { parseUnits } from "viem";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export function useBaseFlow() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use scaffold's contract write hooks for BaseFlow operations
  const { writeAsync: createInvoiceAsync, isMining: isCreatingInvoice } = useScaffoldContractWrite({
    contractName: "BaseFlowImplementation",
    functionName: "createInvoice",
    args: [undefined, undefined, undefined, undefined],
  });

  const { writeAsync: updateInventoryAsync, isMining: isUpdatingInventory } = useScaffoldContractWrite({
    contractName: "BaseFlowImplementation",
    functionName: "updateInventory",
    args: [undefined, undefined, undefined],
  });

  // Read contract state - get USDC token address
  const { data: usdcAddress } = useScaffoldContractRead({
    contractName: "BaseFlowImplementation",
    functionName: "usdc",
  });

  const handleCreateInvoice = useCallback(
    async (customer: string, amount: string, dueDate: number, metadata: string) => {
      try {
        setLoading(true);
        setError(null);

        // Parse amount as USDC (6 decimals)
        const result = await createInvoiceAsync({
          args: [customer as `0x${string}`, parseUnits(amount, 6), BigInt(dueDate), metadata],
        });

        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to create invoice";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [createInvoiceAsync],
  );

  const handleUpdateInventory = useCallback(
    async (itemId: string, quantity: number, price: string) => {
      try {
        setLoading(true);
        setError(null);

        const result = await updateInventoryAsync({
          args: [itemId, BigInt(quantity), parseUnits(price, 6)],
        });

        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to update inventory";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [updateInventoryAsync],
  );

  const isMining = isCreatingInvoice || isUpdatingInventory;

  return {
    // Main functions
    createInvoice: handleCreateInvoice,
    updateInventory: handleUpdateInventory,

    // State
    loading: loading || isMining,
    error,
    isMining,

    // Contract data
    usdcAddress,

    // Individual loading states
    isCreatingInvoice,
    isUpdatingInventory,
  };
}
