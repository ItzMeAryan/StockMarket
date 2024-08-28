import { useState } from 'react';

const AddStockPage = () => {
  const [symbol, setSymbol] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');

  const handleAddStock = (e) => {
    e.preventDefault();
    if (!symbol || !companyName || !quantity) {
      setError('All fields are required');
      return;
    }
    // Handle add stock logic here
    console.log('Adding stock:', { symbol, companyName, quantity });
    setError('');
    // Reset form
    setSymbol('');
    setCompanyName('');
    setQuantity('');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Add Stock</h1>
          
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleAddStock}>
            <div className="mb-4">
              <label htmlFor="symbol" className="block text-gray-700 font-semibold mb-2">Stock Symbol</label>
              <input
                type="text"
                id="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="companyName" className="block text-gray-700 font-semibold mb-2">Company Name</label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-gray-700 font-semibold mb-2">Quantity</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Add Stock
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStockPage;
