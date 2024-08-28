// src/components/AlertManagementPage.jsx

import { useState, useEffect } from 'react';

// Dummy data for alerts
const dummyAlerts = [
  { id: 1, stockName: 'AAPL', condition: 'Price > $160', notification: 'Email', active: true },
  { id: 2, stockName: 'GOOGL', condition: 'Price < $2700', notification: 'SMS', active: false },
  // Add more dummy alerts as needed
];

const AlertManagementPage = () => {
  const [alerts, setAlerts] = useState([]);
  const [newAlert, setNewAlert] = useState({ stockName: '', condition: '', notification: '', active: true });
  const [editingAlert, setEditingAlert] = useState(null);

  useEffect(() => {
    // Replace this with your API call
    setAlerts(dummyAlerts);
  }, []);

  const handleCreateAlert = () => {
    if (editingAlert) {
      setAlerts(alerts.map(alert =>
        alert.id === editingAlert.id ? { ...editingAlert, ...newAlert } : alert
      ));
      setEditingAlert(null);
    } else {
      const newId = Math.max(...alerts.map(alert => alert.id), 0) + 1;
      setAlerts([...alerts, { id: newId, ...newAlert }]);
    }
    setNewAlert({ stockName: '', condition: '', notification: '', active: true });
  };

  const handleEditAlert = (alert) => {
    setEditingAlert(alert);
    setNewAlert({ ...alert });
  };

  const handleDeleteAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Alert Management</h1>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{editingAlert ? 'Edit Alert' : 'Create New Alert'}</h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Stock Name"
                value={newAlert.stockName}
                onChange={(e) => setNewAlert({ ...newAlert, stockName: e.target.value })}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Condition (e.g., Price > $160)"
                value={newAlert.condition}
                onChange={(e) => setNewAlert({ ...newAlert, condition: e.target.value })}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Notification (e.g., Email, SMS)"
                value={newAlert.notification}
                onChange={(e) => setNewAlert({ ...newAlert, notification: e.target.value })}
                className="p-2 border border-gray-300 rounded-md"
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={newAlert.active}
                  onChange={() => setNewAlert({ ...newAlert, active: !newAlert.active })}
                  className="h-5 w-5"
                />
                <label className="text-gray-600">Active</label>
              </div>
              <button
                onClick={handleCreateAlert}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                {editingAlert ? 'Update Alert' : 'Create Alert'}
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Active Alerts</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left text-gray-600">Stock Name</th>
                  <th className="py-3 px-4 text-left text-gray-600">Condition</th>
                  <th className="py-3 px-4 text-left text-gray-600">Notification</th>
                  <th className="py-3 px-4 text-left text-gray-600">Active</th>
                  <th className="py-3 px-4 text-left text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map(alert => (
                  <tr key={alert.id} className="border-b">
                    <td className="py-3 px-4 text-gray-700">{alert.stockName}</td>
                    <td className="py-3 px-4 text-gray-700">{alert.condition}</td>
                    <td className="py-3 px-4 text-gray-700">{alert.notification}</td>
                    <td className="py-3 px-4 text-gray-700">{alert.active ? 'Yes' : 'No'}</td>
                    <td className="py-3 px-4 flex space-x-2">
                      <button
                        onClick={() => handleEditAlert(alert)}
                        className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 transition duration-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteAlert(alert.id)}
                        className="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition duration-200"
                      >
                        Delete
                      </button>
                    </td>
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

export default AlertManagementPage;
