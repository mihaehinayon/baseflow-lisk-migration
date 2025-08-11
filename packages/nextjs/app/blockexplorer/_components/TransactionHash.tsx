"use client";

import { useState } from "react";
import { CheckCircleIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

type TransactionHashProps = {
  hash?: string;
};

export const TransactionHash = ({ hash }: TransactionHashProps) => {
  const [addressCopied, setAddressCopied] = useState(false);

  const handleCopy = async () => {
    if (hash) {
      try {
        await navigator.clipboard.writeText(hash);
        setAddressCopied(true);
        setTimeout(() => {
          setAddressCopied(false);
        }, 800);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  if (!hash) {
    return <p>No transaction hash</p>;
  }

  return (
    <div className="flex items-center">
      <span className="font-mono">{hash}</span>
      <button
        onClick={handleCopy}
        className="ml-1.5 text-xl font-normal group flex items-center transition-all"
        aria-label="Copy transaction hash"
      >
        {addressCopied ? (
          <CheckCircleIcon className="text-gray-500 h-5 w-5" aria-hidden="true" />
        ) : (
          <DocumentDuplicateIcon
            className="text-gray-500 h-5 w-5 cursor-pointer hover:text-gray-700"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
};
