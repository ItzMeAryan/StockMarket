import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const StockDetailsPage = () => {
  const [stock, setStock] = useState(null);
  const [priceHistory, setPriceHistory] = useState([]);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [error, setError] = useState('');
  const { stockSymbol } = useParams(); // Using useParams hook to get stockSymbol from URL

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        // Replace with your API endpoints
        const response = await fetch(`/api/stocks/${stockSymbol}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const stockData = await response.json();
        setStock(stockData.stock);
        setPriceHistory(stockData.priceHistory);
        setCompanyInfo(stockData.companyInfo);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Failed to fetch stock details');
      }
    };

    fetchStockDetails();
  }, [stockSymbol]);

  const handleAddToPortfolio = () => {
    // Add stock to user's portfolio logic here
    console.log(`Adding ${stockSymbol} to portfolio`);
  };

  const handleSetAlert = () => {
    // Redirect to set alerts page or handle set alert logic here
    console.log(`Setting alert for ${stockSymbol}`);
  };

  if (error) return <div className="text-red-500 text-center">{error}</div>;

  // Prepare data for chart
  const chartData = {
    labels: priceHistory.map(entry => entry.date),
    datasets: [
      {
        label: 'Price History',
        data: priceHistory.map(entry => entry.price),
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
          <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">{stock ? stock.companyName : 'Loading...'}</h1>

          {stock && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Stock Price</h2>
                <p className="text-xl text-gray-600">${stock.currentPrice.toFixed(2)}</p>
                <div className="mt-4 bg-gray-200 p-4 rounded-md">
                  <Line data={chartData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Price History</h2>
                <ul className="list-disc pl-5">
                  {priceHistory.map((entry, index) => (
                    <li key={index} className="text-gray-600">
                      {entry.date}: ${entry.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Company Overview</h2>
                <p className="text-gray-600">{companyInfo ? companyInfo.description : 'Loading...'}</p>
                <p className="text-gray-600">Industry: {companyInfo ? companyInfo.industry : 'Loading...'}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Related Stocks</h2>
                <ul className="list-disc pl-5">
                  {companyInfo && companyInfo.relatedStocks.map(stock => (
                    <li key={stock.symbol} className="text-gray-600">
                      {stock.companyName} ({stock.symbol})
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleAddToPortfolio}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Add to Portfolio
                </button>
                <button
                  onClick={handleSetAlert}
                  className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-200"
                >
                  Set Alert
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StockDetailsPage;
