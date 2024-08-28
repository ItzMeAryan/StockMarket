import { useState } from 'react';

// Sample data (replace with actual data from API or state)
const stocks = [
  { id: 1, symbol: 'AAPL', companyName: 'Apple Inc.' },
  { id: 2, symbol: 'GOOGL', companyName: 'Alphabet Inc.' },
  { id: 3, symbol: 'MSFT', companyName: 'Microsoft Corp.' },
];

const SetAlertsPage = () => {
  const [selectedStock, setSelectedStock] = useState('');
  const [triggerCondition, setTriggerCondition] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSetAlert = (e) => {
    e.preventDefault();
    if (!selectedStock || !triggerCondition || !message) {
      setError('All fields are required');
      return;
    }
    // Handle set alert logic here
    console.log('Setting alert:', { selectedStock, triggerCondition, message });
    setError('');
    // Reset form
    setSelectedStock('');
    setTriggerCondition('');
    setMessage('');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Set Alert</h1>
          
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSetAlert}>
            <div className="mb-4">
              <label htmlFor="stock" className="block text-gray-700 font-semibold mb-2">Select Stock</label>
              <select
                id="stock"
                value={selectedStock}
                onChange={(e) => setSelectedStock(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="">Select a stock</option>
                {stocks.map(stock => (
                  <option key={stock.id} value={stock.symbol}>{stock.companyName} ({stock.symbol})</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="condition" className="block text-gray-700 font-semibold mb-2">Trigger Condition</label>
              <input
                type="text"
                id="condition"
                value={triggerCondition}
                onChange={(e) => setTriggerCondition(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="e.g., Price above $200"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Alert Message</label>
              <input
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="e.g., Apple stock price is above $200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Set Alert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetAlertsPage;
