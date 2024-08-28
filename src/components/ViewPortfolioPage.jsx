
// Sample data (replace with actual data from API or state)
const portfolio = [
  { id: 1, symbol: 'AAPL', companyName: 'Apple Inc.', quantity: 10, currentPrice: 175.25 },
  { id: 2, symbol: 'GOOGL', companyName: 'Alphabet Inc.', quantity: 5, currentPrice: 2850.50 },
  { id: 3, symbol: 'MSFT', companyName: 'Microsoft Corp.', quantity: 7, currentPrice: 320.75 },
];

const ViewPortfolioPage = () => {
  const calculateTotalValue = () => {
    return portfolio.reduce((total, stock) => total + (stock.currentPrice * stock.quantity), 0).toFixed(2);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">View Portfolio</h1>

          <div className="mb-6">
            <p className="text-xl font-medium text-gray-800">Total Portfolio Value: <span className="text-blue-600">${calculateTotalValue()}</span></p>
          </div>

          <table className="w-full border border-gray-300 rounded-md">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left">Stock Symbol</th>
                <th className="p-4 text-left">Company Name</th>
                <th className="p-4 text-left">Quantity</th>
                <th className="p-4 text-left">Current Price</th>
                <th className="p-4 text-left">Total Value</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map(stock => (
                <tr key={stock.id} className="border-b border-gray-300">
                  <td className="p-4">{stock.symbol}</td>
                  <td className="p-4">{stock.companyName}</td>
                  <td className="p-4">{stock.quantity}</td>
                  <td className="p-4">${stock.currentPrice.toFixed(2)}</td>
                  <td className="p-4">${(stock.currentPrice * stock.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewPortfolioPage;
