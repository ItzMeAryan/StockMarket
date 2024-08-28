import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PortfolioManagementPage = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch('/api/portfolio');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPortfolio(data.portfolio);
        setPerformanceData(data.performanceData);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Failed to fetch portfolio details');
      }
    };

    fetchPortfolio();
  }, []);

  const handleAddStock = () => {
    // Logic to add stock to the portfolio
    console.log('Add stock');
  };

  const handleRemoveStock = (stockID) => {
    // Logic to remove stock from the portfolio
    console.log(`Remove stock ${stockID}`);
  };

  const chartData = {
    labels: performanceData.map(entry => entry.date),
    datasets: [
      {
        label: 'Portfolio Value',
        data: performanceData.map(entry => entry.value),
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        borderWidth: 2,
        fill: true
      }
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Portfolio Management</h1>

          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Portfolio Overview</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left text-gray-600">Stock</th>
                  <th className="py-3 px-4 text-left text-gray-600">Quantity</th>
                  <th className="py-3 px-4 text-left text-gray-600">Current Price</th>
                  <th className="py-3 px-4 text-left text-gray-600">Total Value</th>
                  <th className="py-3 px-4 text-left text-gray-600">Change</th>
                  <th className="py-3 px-4 text-left text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map(stock => (
                  <tr key={stock.stockID} className="border-b">
                    <td className="py-3 px-4 text-gray-700">{stock.symbol}</td>
                    <td className="py-3 px-4 text-gray-700">{stock.quantity}</td>
                    <td className="py-3 px-4 text-gray-700">${stock.currentPrice.toFixed(2)}</td>
                    <td className="py-3 px-4 text-gray-700">${(stock.currentPrice * stock.quantity).toFixed(2)}</td>
                    <td className="py-3 px-4 text-gray-700">
                      {stock.change > 0 ? (
                        <span className="text-green-600">+${stock.change.toFixed(2)}</span>
                      ) : (
                        <span className="text-red-600">${stock.change.toFixed(2)}</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleRemoveStock(stock.stockID)}
                        className="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition duration-200"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Portfolio Performance</h2>
            <div className="mt-4 bg-gray-200 p-4 rounded-md">
              <Line data={chartData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleAddStock}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Add Stock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioManagementPage;
