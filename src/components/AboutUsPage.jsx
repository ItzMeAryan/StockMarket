// src/components/AboutUsPage.jsx

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              We are dedicated to providing a powerful and user-friendly platform for stock market enthusiasts. Our goal is to empower users with the tools and insights needed to make informed investment decisions and manage their portfolios effectively.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">What We Do</h3>
            <p className="text-gray-700">
              Our platform offers real-time stock tracking, portfolio management, and insightful market updates. We aim to make stock market analysis accessible and easy to understand for everyone.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Team Member 1 */}
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <h3 className="text-xl font-semibold mt-4">Aryan</h3>
                <p className="text-gray-600">Front End Developer</p>
                <p className="text-gray-700 mt-2">
                   is the visionary behind our platform, with a passion for technology and finance.
                </p>
              </div>
              {/* Team Member 2 */}
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <h3 className="text-xl font-semibold mt-4">Arshit</h3>
                <p className="text-gray-600">Backend Developer</p>
                <p className="text-gray-700 mt-2">
                 leads our tech team, ensuring that our platform runs smoothly and efficiently.
                </p>
              </div>
              {/* Team Member 3 */}
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <h3 className="text-xl font-semibold mt-4">Dewansh</h3>
                <p className="text-gray-600">Machine Learning</p>
                <p className="text-gray-700 mt-2">
                 is responsible for our marketing strategies and helps spread the word about our platform.
                </p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
        </section>

        {/* Company History Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Company History</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700">
              Founded in 2020, our company started with a mission to simplify stock market investing. Over the years, we have grown and evolved, continually improving our platform and expanding our features to better serve our users.
            </p>
          </div>
        </section>

        {/* Contact & Social Media Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              For any inquiries, feel free to reach out to us through the following channels:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Email: <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a></li>
            </ul>
            <div>
              <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-blue-600 hover:underline">Facebook</a>
                <a href="https://twitter.com" className="text-blue-400 hover:underline">Twitter</a>
                <a href="https://linkedin.com" className="text-blue-700 hover:underline">LinkedIn</a>
                {/* Add more social media links as needed */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
