import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../utils/api';

const AccountPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const email = sessionStorage.getItem('email');
    if (email != null) {
      setEmail(email);
    }
    const admin = sessionStorage.getItem('role');
    if (admin === 'admin') {
      setAdmin(true);
    }

  })

  const logoutUser = async () => {
    const response = await logout();

    if (response.status === 200) {
      sessionStorage.clear();
      navigate('/');
    } else {
      // navigate
    }
  }

  return <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">My Account</h1>
            <p className="text-sm">Welcome back, John Doe!</p>
          </div>

          {admin ?
            <Link to='/admin/products'>
              <div className='bg-blue-200 p-2 rounded-lg text-black'>Admin Panel</div>
            </Link> : ''
          }
          <button onClick={logoutUser} className='bg-blue-200 p-2 rounded-lg text-black'>Log out</button>
        </div>


        {/* Content */}
        <div className="p-6">
          {/* Personal Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  defaultValue="John"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  value={email}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  defaultValue="+1234567890"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Save Changes
            </button>
          </div>

          {/* Order History Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Order ID</th>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Total</th>
                    <th className="py-2 px-4 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">#12345</td>
                    <td className="py-2 px-4 border-b">2023-10-01</td>
                    <td className="py-2 px-4 border-b">$99.99</td>
                    <td className="py-2 px-4 border-b">Delivered</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">#12346</td>
                    <td className="py-2 px-4 border-b">2023-09-25</td>
                    <td className="py-2 px-4 border-b">$49.99</td>
                    <td className="py-2 px-4 border-b">Shipped</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Addresses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold">Billing Address</h3>
                <p>123 Main St</p>
                <p>Springfield, IL 62701</p>
                <p>USA</p>
                <button className="mt-2 text-blue-600 hover:underline">Edit</button>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold">Shipping Address</h3>
                <p>456 Elm St</p>
                <p>Springfield, IL 62701</p>
                <p>USA</p>
                <button className="mt-2 text-blue-600 hover:underline">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>;
};

export default AccountPage;