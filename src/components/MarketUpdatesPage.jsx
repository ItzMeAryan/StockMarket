// src/components/MarketUpdatesPage.jsx

import { useState, useEffect } from 'react';

// Dummy data for market updates
const dummyUpdates = [
  { updateID: '1', timeStamp: '2024-08-25T10:00:00Z', description: 'Market opens with gains after positive economic reports', stocks: ['AAPL', 'GOOGL'] },
  { updateID: '2', timeStamp: '2024-08-24T14:00:00Z', description: 'Tech stocks rally amid new product announcements', stocks: ['MSFT', 'AMZN'] },
  // Add more updates as needed
];

const MarketUpdatesPage = () => {
  const [updates, setUpdates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUpdates, setFilteredUpdates] = useState([]);

  useEffect(() => {
    // Replace this with your API call to fetch market updates
    setUpdates(dummyUpdates);
  }, []);

  useEffect(() => {
    // Filter updates based on search term
    setFilteredUpdates(
      updates.filter(update =>
        update.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, updates]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Market Updates and News</h1>
          
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search updates..."
              className="p-2 border border-gray-300 rounded-md w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Latest Updates</h2>
            {filteredUpdates.length > 0 ? (
              <div className="space-y-4">
                {filteredUpdates.map((update) => (
                  <div key={update.updateID} className="bg-white p-4 border border-gray-200 rounded-md shadow-sm">
                    <p className="text-gray-600 text-sm mb-1">{new Date(update.timeStamp).toLocaleString()}</p>
                    <p className="text-gray-800 font-semibold">{update.description}</p>
                    <p className="text-gray-600 text-sm mt-2">
                      <strong>Related Stocks:</strong> {update.stocks.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-600">No updates found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketUpdatesPage;
