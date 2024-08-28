import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const user = {
    portfolioValue: '$12,345.67',
    recentTransactions: [
      { id: 1, type: 'Buy', stock: 'AAPL', quantity: 10, date: '2024-08-25' },
      { id: 2, type: 'Sell', stock: 'GOOGL', quantity: 5, date: '2024-08-20' },
    ],
    alerts: [
      { id: 1, stock: 'AAPL', message: 'Price reached your target!' },
      { id: 2, stock: 'MSFT', message: 'Price fell below your threshold!' },
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">User Dashboard</h1>

        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Portfolio Summary</h2>
          <p className="text-xl font-medium text-gray-800">Current Value: <span className="text-blue-600">{user.portfolioValue}</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Transactions</h2>
            <ul>
              {user.recentTransactions.map(transaction => (
                <li key={transaction.id} className="border-b border-gray-300 py-2">
                  <p className="text-gray-800">{transaction.date} - {transaction.type} {transaction.quantity} shares of {transaction.stock}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pending Alerts</h2>
            <ul>
              {user.alerts.map(alert => (
                <li key={alert.id} className="border-b border-gray-300 py-2">
                  <p className="text-gray-800">{alert.stock}: {alert.message}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Quick Links</h2>
          <div className="flex flex-col space-y-4">
            <Link to="/add-stock" className="text-blue-600 hover:underline">Add Stock</Link>
            <Link to="/view-portfolio" className="text-blue-600 hover:underline">View Portfolio</Link>
            <Link to="/set-alerts" className="text-blue-600 hover:underline">Set Alerts</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;