
import React, { useState, useEffect } from 'react';

const OperatorDashboard = () => {
  const [addressRequests, setAddressRequests] = useState([]);
  const [pinCodeMapping, setPinCodeMapping] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  // Fetch Address Requests (Mock API Call)
  useEffect(() => {
    const fetchAddressRequests = async () => {
      const mockRequests = [
        { id: 1, customerName: 'John Doe', address: '123 Main St, City A', pinCode: '123456' },
        { id: 2, customerName: 'Jane Smith', address: '456 Market Rd, City B', pinCode: '654321' },
      ];
      setAddressRequests(mockRequests);
    };
    fetchAddressRequests();
  }, []);

  // Fetch PIN Code Mapping (Mock API Call)
  useEffect(() => {
    const fetchPinCodeMapping = async () => {
      const mockMapping = [
        { oldPin: '123456', newPin: '123450', area: 'City A' },
        { oldPin: '654321', newPin: '654320', area: 'City B' },
      ];
      setPinCodeMapping(mockMapping);
    };
    fetchPinCodeMapping();
  }, []);

  // Handle Approve Request
  const handleApprove = (id) => {
    alert(`Request with ID ${id} approved!`);
    setAddressRequests(addressRequests.filter((req) => req.id !== id));
  };

  // Handle Reject Request
  const handleReject = (id) => {
    alert(`Request with ID ${id} rejected!`);
    setAddressRequests(addressRequests.filter((req) => req.id !== id));
  };

  // Handle PIN Code Update
  const handlePinCodeUpdate = (oldPin, newPin) => {
    setPinCodeMapping(
      pinCodeMapping.map((mapping) =>
        mapping.oldPin === oldPin ? { ...mapping, newPin } : mapping
      )
    );
    alert(`PIN code updated from ${oldPin} to ${newPin}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Operator Dashboard
      </h1>

      {/* Profile Section */}
      <div className="absolute top-4 right-4">
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-gray-700 transition"
          >
            Profile
          </button>
          {showProfile && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg p-4 w-64">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Operator Profile
              </h3>
              <p className="text-gray-600">
                <strong>Name:</strong> Operator Name
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> operator@example.com
              </p>
              <p className="text-gray-600">
                <strong>Role:</strong> Dashboard Operator
              </p>
              <button
                onClick={() => alert('Logging out...')}
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Address Validation Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Address Validation Requests
        </h2>
        {addressRequests.length > 0 ? (
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">PIN Code</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {addressRequests.map((req) => (
                <tr key={req.id} className="border-t">
                  <td className="px-4 py-2">{req.customerName}</td>
                  <td className="px-4 py-2">{req.address}</td>
                  <td className="px-4 py-2">{req.pinCode}</td>
                  <td className="px-4 py-2 flex gap-4">
                    <button
                      onClick={() => handleApprove(req.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(req.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No pending address requests.</p>
        )}
      </section>

      {/* PIN Code Management Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          PIN Code Management
        </h2>
        {pinCodeMapping.length > 0 ? (
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="px-4 py-2">Old PIN Code</th>
                <th className="px-4 py-2">New PIN Code</th>
                <th className="px-4 py-2">Area</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pinCodeMapping.map((mapping, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{mapping.oldPin}</td>
                  <td className="px-4 py-2">{mapping.newPin}</td>
                  <td className="px-4 py-2">{mapping.area}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() =>
                        handlePinCodeUpdate(mapping.oldPin, prompt('Enter new PIN code:'))
                      }
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                      Update PIN
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No PIN codes available for management.</p>
        )}
      </section>
    </div>
  );
};

export default OperatorDashboard;

