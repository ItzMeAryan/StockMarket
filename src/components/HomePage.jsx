
const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-blue-600">Stock Market Tracker</h1>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Login</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">Register</button>
        </div>
      </header>

      {/* Market Summary */}
      <section className="bg-white p-6 rounded-md shadow-md mt-6">
        <h2 className="text-2xl font-semibold mb-4">Market Summary</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="text-lg font-medium text-blue-600">NASDAQ</h3>
            <p className="text-xl font-bold text-black">14,500.67</p>
            <p className="text-green-600">+150.23 (+1.05%)</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="text-lg font-medium text-blue-600">S&P 500</h3>
            <p className="text-xl font-bold text-black">4,500.98</p>
            <p className="text-red-600">-12.34 (-0.27%)</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="text-lg font-medium text-blue-600">DOW JONES</h3>
            <p className="text-xl font-bold text-black">35,000.67</p>
            <p className="text-green-600">+89.23 (+0.26%)</p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="mt-6">
        <input
          type="text"
          placeholder="Search for stocks, companies, or news..."
          className="w-full p-4 rounded-md shadow-md border border-gray-300"
        />
      </section>

      {/* Trending Stocks */}
      <section className="bg-white p-6 rounded-md shadow-md mt-6">
        <h2 className="text-2xl font-semibold mb-4">Trending Stocks</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-md">
            <h3 className="text-lg font-medium text-green-600">AAPL</h3>
            <p className="text-xl font-bold text-black">$145.23</p>
            <p className="text-green-600">+1.23 (+0.85%)</p>
          </div>
          <div className="bg-green-50 p-4 rounded-md">
            <h3 className="text-lg font-medium text-green-600">TSLA</h3>
            <p className="text-xl font-bold text-black">$700.45</p>
            <p className="text-green-600">+4.56 (+0.65%)</p>
          </div>
          <div className="bg-green-50 p-4 rounded-md">
            <h3 className="text-lg font-medium text-green-600">AMZN</h3>
            <p className="text-xl font-bold text-black">$3,345.67</p>
            <p className="text-red-600">-10.23 (-0.30%)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
