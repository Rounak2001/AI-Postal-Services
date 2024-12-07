import React, { useState } from 'react';
import axios from 'axios';

const CustomerHome = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('pincode'); // Default search type
  const [results, setResults] = useState([]);
  const [filterState, setFilterState] = useState('');
  const [filterDistrict, setFilterDistrict] = useState('');

  const searchPostOffices = async (e) => {
    e.preventDefault();
    if (!searchInput) {
      alert('Please enter a PIN Code or Post Office name!');
      return;
    }

    try {
      const url =
        searchType === 'pincode'
          ? `https://api.postalpincode.in/pincode/${searchInput}`
          : `https://api.postalpincode.in/postoffice/${searchInput}`;
      const response = await axios.get(url);
      if (response.data && response.data[0].Status === 'Success') {
        setResults(response.data[0].PostOffice || []);
      } else {
        alert('No results found!');
        setResults([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const filteredResults = results.filter((office) => {
    // Apply state filter
    if (filterState && office.State !== filterState) return false;

    // Apply district filter
    if (filterDistrict && office.District !== filterDistrict) return false;

    return true;
  });

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-2xl font-bold mb-6">Post Office Search</h1>
      <form
        onSubmit={searchPostOffices}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Search By
          </label>
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="pincode">PIN Code</option>
            <option value="postoffice">Post Office Name</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter {searchType === 'pincode' ? 'PIN Code' : 'Post Office Name'}
          </label>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={`Enter ${searchType === 'pincode' ? 'PIN Code' : 'Post Office Name'}`}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>

      {results.length > 0 && (
        <div className="mt-6 w-full max-w-4xl">
          <h3 className="font-bold text-lg mb-4">
            Number of Post Office(s) Found: {filteredResults.length || 0}
          </h3>
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Filter by State
              </label>
              <select
                value={filterState}
                onChange={(e) => {
                  setFilterState(e.target.value);
                  setFilterDistrict(''); // Reset district when state changes
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">All States</option>
                {[...new Set(results.map((office) => office.State))].map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Filter by District
              </label>
              <select
                value={filterDistrict}
                onChange={(e) => setFilterDistrict(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">All Districts</option>
                {results
                  .filter((office) => !filterState || office.State === filterState)
                  .map((office) => office.District)
                  .filter((value, index, self) => self.indexOf(value) === index) // Unique districts
                  .map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Post Office</th>
                <th className="border border-gray-300 px-4 py-2">Branch Type</th>
                <th className="border border-gray-300 px-4 py-2">Region</th>
                <th className="border border-gray-300 px-4 py-2">District</th>
                <th className="border border-gray-300 px-4 py-2">Pincode</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((office, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} hover:bg-gray-200`}
                >
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}.</td>
                  <td className="border border-gray-300 px-4 py-2">{office.Name}</td>
                  <td className="border border-gray-300 px-4 py-2">{office.BranchType}</td>
                  <td className="border border-gray-300 px-4 py-2">{office.Region}</td>
                  <td className="border border-gray-300 px-4 py-2">{office.District}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{office.Pincode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomerHome;
