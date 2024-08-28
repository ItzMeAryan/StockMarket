// src/components/CompanyProfilesPage.jsx

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; // Importing Line chart from Chart.js
// import Chart from 'chart.js/auto'; 
// Import Chart.js auto for chart rendering

// Dummy data for company profiles
const dummyCompany = {
  name: 'Apple Inc.',
  industry: 'Technology',
  marketCap: '$2.6 Trillion',
  stockPerformance: [150, 155, 160, 170, 175, 180, 185], // Example stock prices over time
  relatedStocks: ['GOOGL', 'MSFT', 'AMZN'],
  news: [
    { date: '2024-08-20', headline: 'Apple announces new product lineup' },
    { date: '2024-08-18', headline: 'Apple’s stock reaches new all-time high' },
    // Add more news items as needed
  ]
};

const CompanyProfilesPage = () => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    // Replace this with your API call to fetch company data
    setCompany(dummyCompany);
  }, []);

  const stockChartData = {
    labels: Array.from({ length: company?.stockPerformance.length }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Stock Performance',
        data: company?.stockPerformance,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-7xl">
        {company ? (
          <div className="bg-white p-8 rounded-md shadow-md">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">{company.name} Profile</h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Company Information</h2>
              <div className="space-y-2">
                <p><strong>Industry:</strong> {company.industry}</p>
                <p><strong>Market Cap:</strong> {company.marketCap}</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Stock Performance</h2>
              <div className="bg-gray-200 p-4 rounded-md">
                <Line data={stockChartData} />
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Related Stocks</h2>
              <ul className="list-disc pl-5">
                {company.relatedStocks.map((stock, index) => (
                  <li key={index} className="text-gray-700">{stock}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent News</h2>
              <div className="space-y-4">
                {company.news.map((newsItem, index) => (
                  <div key={index} className="bg-white p-4 border border-gray-200 rounded-md shadow-sm">
                    <p className="text-gray-600 text-sm mb-1">{newsItem.date}</p>
                    <p className="text-gray-800 font-semibold">{newsItem.headline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600">Loading company data...</div>
        )}
      </div>
    </div>
  );
};

export default CompanyProfilesPage;
