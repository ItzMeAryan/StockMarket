// src/components/HelpFAQPage.jsx
import { useState } from 'react';

const HelpFAQPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Contact Form Submitted:', contactForm);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions (FAQ)</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">How do I add a stock to my portfolio?</h3>
            <p className="text-gray-700">
              To add a stock to your portfolio, go to the "Add Stock" page, enter the stock details, and click "Add."
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">How can I set up alerts for stock prices?</h3>
            <p className="text-gray-700">
              You can set up alerts by going to the "Set Alerts" page, entering the stock and alert conditions, and saving the alert.
            </p>
            {/* Add more FAQs as needed */}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Contact Support</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={contactForm.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={contactForm.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={contactForm.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  value={contactForm.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Company Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mt-12">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">Address: Grand Trunk Road, Barnala - Amritsar Bypass Rd, Jalandhar, Punjab 144011
            Dr B R Ambedkar National Institute of Technology Jalandhar</p>
            <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-700 mb-6">Email: support@stockmarket.com</p>
            {/* Map Integration (Placeholder) */}
            <div className="h-64 bg-gray-200 rounded">
              {/* Embed Google Maps or other map service here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8740608452786!2d-74.00594148459686!3d40.71277597933193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a312f54c45f%3A0x1d08b8e9b5f923b3!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1618315730156!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Tutorials/Guides Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Tutorials & Guides</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700">
              Check out our tutorials and guides to learn more about how to use key features of the platform:
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li><a href="/tutorials/portfolio-management" className="text-blue-500 hover:underline">Portfolio Management</a></li>
              <li><a href="/tutorials/setting-alerts" className="text-blue-500 hover:underline">Setting Alerts</a></li>
              {/* Add more tutorials/guides as needed */}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpFAQPage;
