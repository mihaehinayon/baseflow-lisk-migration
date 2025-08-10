import { useState, useCallback } from 'react';
import { parseUnits } from 'viem';
import { useScaffoldContractWrite, useScaffoldContractRead } from '~~/hooks/scaffold-eth';

export function useBaseFlow() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use scaffold's contract write hooks for BaseFlow operations
  const { writeAsync: createInvoiceAsync, isMining: isCreatingInvoice } = useScaffoldContractWrite({
    contractName: "BaseFlowImplementation",
    functionName: "createInvoice",
  });

  const { writeAsync: updateInventoryAsync, isMining: isUpdatingInventory } = useScaffoldContractWrite({
    contractName: "BaseFlowImplementation", 
    functionName: "updateInventory",
  });

  // Read contract state for balance and invoice count
  const { data: invoiceCounter } = useScaffoldContractRead({
    contractName: "BaseFlowImplementation",
    functionName: "invoiceCounter",
  });

  const handleCreateInvoice = useCallback(async (
    customer: string,
    amount: string,
    dueDate: number,
    metadata: string
  ) => {
    try {
      setLoading(true);
      setError(null);
      
      // Parse amount as USDC (6 decimals)
      const result = await createInvoiceAsync({
        args: [customer as `0x${string}`, parseUnits(amount, 6), BigInt(dueDate), metadata],
      });

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create invoice';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [createInvoiceAsync]);

  const handleUpdateInventory = useCallback(async (
    itemId: string,
    quantity: number,
    price: string
  ) => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await updateInventoryAsync({
        args: [itemId, BigInt(quantity), parseUnits(price, 6)],
      });

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update inventory';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [updateInventoryAsync]);

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
    invoiceCounter,
    
    // Individual loading states
    isCreatingInvoice,
    isUpdatingInventory,
  };
}