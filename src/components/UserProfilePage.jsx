import { useState } from 'react';

const UserProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    notifications: true,
    security: true,
    photo: '' // URL or base64 string for the profile photo
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProfile({ ...profile, [name]: checked });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Implement profile update logic here
    console.log('Profile updated:', profile);
  };

  const handleAccountDeletion = () => {
    // Implement account deletion logic here
    console.log('Account deleted');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">User Profile</h1>

          <form onSubmit={handleProfileUpdate}>
            <div className="flex items-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={profile.photo || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="ml-4 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 border border-gray-300 rounded-md w-full"
                value={profile.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border border-gray-300 rounded-md w-full"
                value={profile.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="p-2 border border-gray-300 rounded-md w-full"
                value={profile.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="notifications"
                  className="form-checkbox"
                  checked={profile.notifications}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-700">Receive notifications</span>
              </label>
            </div>

            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="security"
                  className="form-checkbox"
                  checked={profile.security}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-700">Enable two-factor authentication</span>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
              >
                Update Profile
              </button>
              <button
                type="button"
                onClick={handleAccountDeletion}
                className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
