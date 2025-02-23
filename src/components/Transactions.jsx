import React from 'react';

export const Transactions = () => {
  const transactions = [
    { id: 1, type: "Credit", amount: "$250", date: "2025-02-20" },
    { id: 2, type: "Debit", amount: "$100", date: "2025-02-19" },
    { id: 3, type: "Credit", amount: "$500", date: "2025-02-18" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Transactions</h2>
      <p className="text-gray-600">View and track your recent transactions.</p>
      <ul className="mt-4">
        {transactions.map((tx) => (
          <li key={tx.id} className="border-b py-2">
            <span className="font-semibold">{tx.type}</span>: {tx.amount} on {tx.date}
          </li>
        ))}
      </ul>
    </div>
  );
};