// src/components/TransactionHistoryPage.jsx

import { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Ensure this import is correct

// Dummy data for transactions
const dummyTransactions = [
  { stockName: 'AAPL', quantity: 10, date: '2024-08-01', type: 'Buy', price: 150.00 },
  { stockName: 'GOOGL', quantity: 5, date: '2024-08-05', type: 'Sell', price: 2800.00 },
  // Add more dummy data as needed
];

const TransactionHistoryPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Replace this with your API call
    setTransactions(dummyTransactions);
    setFilteredTransactions(dummyTransactions);
  }, []);

  useEffect(() => {
    const results = transactions.filter(transaction =>
      transaction.stockName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(results);
  }, [searchTerm, transactions]);

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('Transaction History', 14, 16);
    doc.autoTable({
      head: [['Stock Name', 'Quantity', 'Date', 'Type', 'Price']],
      body: filteredTransactions.map(t => [
        t.stockName,
        t.quantity,
        t.date,
        t.type,
        t.price.toFixed(2),
      ]),
    });
    doc.save('transaction-history.pdf');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Transaction History</h1>

          <div className="mb-6 flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search by stock name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border border-gray-300 rounded-md flex-1"
            />
            <button
              onClick={handleExportPDF}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
            >
              Export as PDF
            </button>
            <CSVLink
              data={filteredTransactions}
              headers={[
                { label: 'Stock Name', key: 'stockName' },
                { label: 'Quantity', key: 'quantity' },
                { label: 'Date', key: 'date' },
                { label: 'Type', key: 'type' },
                { label: 'Price', key: 'price' },
              ]}
              filename="transaction-history.csv"
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
            >
              Export as CSV
            </CSVLink>
          </div>

          <div>
            <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left text-gray-600">Stock Name</th>
                  <th className="py-3 px-4 text-left text-gray-600">Quantity</th>
                  <th className="py-3 px-4 text-left text-gray-600">Date</th>
                  <th className="py-3 px-4 text-left text-gray-600">Type</th>
                  <th className="py-3 px-4 text-left text-gray-600">Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map(transaction => (
                  <tr key={transaction.date} className="border-b">
                    <td className="py-3 px-4 text-gray-700">{transaction.stockName}</td>
                    <td className="py-3 px-4 text-gray-700">{transaction.quantity}</td>
                    <td className="py-3 px-4 text-gray-700">{transaction.date}</td>
                    <td className="py-3 px-4 text-gray-700">{transaction.type}</td>
                    <td className="py-3 px-4 text-gray-700">${transaction.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
