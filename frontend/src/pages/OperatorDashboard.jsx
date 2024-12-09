





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const OperatorDashboard = () => {
//   const [image, setImage] = useState(null); // Image file selected for upload
//   const [imageInfo, setImageInfo] = useState([]); // Holds image data from the backend

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };

//   // Submit image to backend for processing
//   const handleImageSubmit = async () => {
//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       await axios.post('http://localhost:8000/upload-image/', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       // Fetch updated image data from backend after upload
//       fetchImageData();
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   // Fetch image data from backend
//   const fetchImageData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/get-image-data/');
//       setImageInfo(response.data);
//     } catch (error) {
//       console.error('Error fetching image data:', error);
//     }
//   };

//   // Handle modify address
//   const handleModifyAddress = async (id, newAddress) => {
//     try {
//       await axios.post('http://localhost:8000/modify-address/', { id, newAddress });
//       alert('Address modified successfully!');
//       fetchImageData(); // Refresh data after modification
//     } catch (error) {
//       console.error('Error modifying address:', error);
//     }
//   };

//   // Handle send notification
//   const handleSendNotification = (phoneNumber) => {
//     alert(`Notification sent to ${phoneNumber}`);
//     // You can integrate real notification API here
//   };

//   // Handle approve action
//   const handleApprove = (id) => {
//     alert(`Request approved for ID: ${id}`);
//     // Backend approval logic can be added here
//   };

//   // Handle reject action
//   const handleReject = (id) => {
//     alert(`Request rejected for ID: ${id}`);
//     // Backend rejection logic can be added here
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Operator Dashboard</h1>

//       {/* Image Upload Section */}
//       <section className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Image</h2>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//           className="border p-2 rounded w-full mb-4"
//         />
//         <button
//           onClick={handleImageSubmit}
//           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//         >
//           Upload Image
//         </button>
//       </section>

//       {/* Image Data Table Section */}
//       {imageInfo.length > 0 && (
//         <section className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Uploaded Image Data</h2>
//           <table className="table-auto w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-200 text-gray-800">
//                 <th className="px-4 py-2">Sender Address</th>
//                 <th className="px-4 py-2">Receiver Address</th>
//                 <th className="px-4 py-2">Modified Address</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {imageInfo.map((item, index) => (
//                 <tr key={index} className="border-t">
//                   <td className="px-4 py-2">{item.senderAddress}</td>
//                   <td className="px-4 py-2">{item.receiverAddress}</td>
//                   <td className="px-4 py-2">
//                     <input
//                       type="text"
//                       defaultValue={item.modifiedAddress || item.receiverAddress}
//                       onChange={(e) => {
//                         item.modifiedAddress = e.target.value;
//                       }}
//                       className="border p-2 rounded w-full"
//                     />
//                   </td>
//                   <td className="px-4 py-2">
//                     <div className="flex gap-4">
//                       {/* Send Notification Button */}
//                       <button
//                         onClick={() => handleSendNotification(item.receiverPhone)}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//                       >
//                         Send Notification
//                       </button>
//                       {/* Approve Button */}
//                       <button
//                         onClick={() => handleApprove(item.id)}
//                         className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//                       >
//                         Approve
//                       </button>
//                       {/* Reject Button */}
//                       <button
//                         onClick={() => handleReject(item.id)}
//                         className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//                       >
//                         Reject
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </section>
//       )}
//     </div>
//   );
// };

// export default OperatorDashboard;

















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const OperatorDashboard = () => {
//   const [image, setImage] = useState(null); // Image file selected for upload
//   const [imageInfo, setImageInfo] = useState([]); // Holds image data from the backend
//   const [mergedPinCodes, setMergedPinCodes] = useState([]); // Holds merged pin code data

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };

//   // Submit image to backend for processing
//   const handleImageSubmit = async () => {
//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       await axios.post('http://localhost:8000/upload-image/', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       // Fetch updated image data from backend after upload
//       fetchImageData();
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   // Fetch image data from backend
//   const fetchImageData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/get-image-data/');
//       setImageInfo(response.data);
//     } catch (error) {
//       console.error('Error fetching image data:', error);
//     }
//   };

//   // Handle modify address
//   const handleModifyAddress = async (id, newAddress) => {
//     try {
//       await axios.post('http://localhost:8000/modify-address/', { id, newAddress });
//       alert('Address modified successfully!');
//       fetchImageData(); // Refresh data after modification
//     } catch (error) {
//       console.error('Error modifying address:', error);
//     }
//   };

//   // Handle send notification
//   const handleSendNotification = (phoneNumber) => {
//     alert(`Notification sent to ${phoneNumber}`);
//     // You can integrate real notification API here
//   };

//   // Handle approve action
//   const handleApprove = (id) => {
//     alert(`Request approved for ID: ${id}`);
//     // Backend approval logic can be added here
//   };

//   // Handle reject action
//   const handleReject = (id) => {
//     alert(`Request rejected for ID: ${id}`);
//     // Backend rejection logic can be added here
//   };

//   // Handle merging pin codes
//   const handleMergePinCodes = () => {
//     // Merge logic based on pin codes
//     const pinCodeGroups = imageInfo.reduce((acc, item) => {
//       const { pinCode } = item.senderAddress; // Assuming pinCode is in the senderAddress object
//       if (!acc[pinCode]) {
//         acc[pinCode] = [];
//       }
//       acc[pinCode].push(item);
//       return acc;
//     }, {});

//     const mergedData = Object.values(pinCodeGroups).filter(group => group.length > 1); // Merging parcels with the same pincode
//     setMergedPinCodes(mergedData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Operator Dashboard</h1>

//       {/* Image Upload and Address Management Section */}
//       <section className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Image & Manage Addresses</h2>
        
//         {/* Image Upload */}
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//           className="border p-2 rounded w-full mb-4"
//         />
//         <button
//           onClick={handleImageSubmit}
//           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//         >
//           Upload Image
//         </button>
        
//         {/* Image Data Table */}
//         {imageInfo.length > 0 && (
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploaded Image Data</h3>
//             <table className="table-auto w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-gray-200 text-gray-800">
//                   <th className="px-4 py-2">Sender Address</th>
//                   <th className="px-4 py-2">Receiver Address</th>
//                   <th className="px-4 py-2">Modified Address</th>
//                   <th className="px-4 py-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {imageInfo.map((item, index) => (
//                   <tr key={index} className="border-t">
//                     <td className="px-4 py-2">{item.senderAddress}</td>
//                     <td className="px-4 py-2">{item.receiverAddress}</td>
//                     <td className="px-4 py-2">
//                       <input
//                         type="text"
//                         defaultValue={item.modifiedAddress || item.receiverAddress}
//                         onChange={(e) => {
//                           item.modifiedAddress = e.target.value;
//                         }}
//                         className="border p-2 rounded w-full"
//                       />
//                     </td>
//                     <td className="px-4 py-2">
//                       <div className="flex gap-4">
//                         {/* Send Notification Button */}
//                         <button
//                           onClick={() => handleSendNotification(item.receiverPhone)}
//                           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//                         >
//                           Send Notification
//                         </button>
//                         {/* Approve Button */}
//                         <button
//                           onClick={() => handleApprove(item.id)}
//                           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//                         >
//                           Approve
//                         </button>
//                         {/* Reject Button */}
//                         <button
//                           onClick={() => handleReject(item.id)}
//                           className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//                         >
//                           Reject
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </section>

//       {/* Pincode Merge Section */}
//       <section className="bg-white shadow-md rounded-lg p-6 mt-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Merge Parcels by Pincode</h2>
//         <button
//           onClick={handleMergePinCodes}
//           className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
//         >
//           Merge Parcels with Same Pincode
//         </button>

//         {/* Display merged data */}
//         {mergedPinCodes.length > 0 && (
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Merged Parcels</h3>
//             <table className="table-auto w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-gray-200 text-gray-800">
//                   <th className="px-4 py-2">Sender Address</th>
//                   <th className="px-4 py-2">Receiver Address</th>
//                   <th className="px-4 py-2">Merged Parcels</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mergedPinCodes.map((group, index) => (
//                   <tr key={index} className="border-t">
//                     <td className="px-4 py-2">
//                       {group.map((item) => item.senderAddress).join(', ')}
//                     </td>
//                     <td className="px-4 py-2">
//                       {group.map((item) => item.receiverAddress).join(', ')}
//                     </td>
//                     <td className="px-4 py-2">{group.length} parcels merged</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default OperatorDashboard;











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaBell, FaCheckCircle, FaTimesCircle, FaUpload } from 'react-icons/fa';  // Correct import

// const OperatorDashboard = () => {
//   const [image, setImage] = useState(null);
//   const [imageInfo, setImageInfo] = useState([]);
//   const [mergedPinCodes, setMergedPinCodes] = useState([]);

//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleImageSubmit = async () => {
//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       await axios.post('http://localhost:8000/upload-image/', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       fetchImageData();
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   const fetchImageData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/get-image-data/');
//       setImageInfo(response.data);
//     } catch (error) {
//       console.error('Error fetching image data:', error);
//     }
//   };

//   const handleModifyAddress = async (id, newAddress) => {
//     try {
//       await axios.post('http://localhost:8000/modify-address/', { id, newAddress });
//       alert('Address modified successfully!');
//       fetchImageData();
//     } catch (error) {
//       console.error('Error modifying address:', error);
//     }
//   };

//   const handleSendNotification = (phoneNumber) => {
//     alert(`Notification sent to ${phoneNumber}`);
//   };

//   const handleApprove = (id) => {
//     alert(`Request approved for ID: ${id}`);
//   };

//   const handleReject = (id) => {
//     alert(`Request rejected for ID: ${id}`);
//   };

//   const handleMergePinCodes = () => {
//     const pinCodeGroups = imageInfo.reduce((acc, item) => {
//       const { pinCode } = item.senderAddress;
//       if (!acc[pinCode]) {
//         acc[pinCode] = [];
//       }
//       acc[pinCode].push(item);
//       return acc;
//     }, {});

//     const mergedData = Object.values(pinCodeGroups).filter(group => group.length > 1);
//     setMergedPinCodes(mergedData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Operator Dashboard</h1>

//       {/* Image Upload and Address Management Section */}
//       <section className="bg-white shadow-lg rounded-lg p-8 mb-8 space-y-6">
//         <h2 className="text-2xl font-semibold text-gray-800">Upload Image & Manage Addresses</h2>
        
//         {/* Image Upload */}
//         <div className="flex items-center gap-4">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="border p-3 rounded-lg w-full text-gray-700"
//           />
//           <button
//             onClick={handleImageSubmit}
//             className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
//           >
//             <FaUpload className="inline-block mr-2" /> Upload Image
//           </button>
//         </div>
        
//         {/* Image Data Table */}
//         {imageInfo.length > 0 && (
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploaded Image Data</h3>
//             <table className="w-full text-left table-auto border-collapse rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-800">
//                   <th className="px-6 py-4">Sender Address</th>
//                   <th className="px-6 py-4">Receiver Address</th>
//                   <th className="px-6 py-4">Modified Address</th>
//                   <th className="px-6 py-4">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {imageInfo.map((item, index) => (
//                   <tr key={index} className="border-t hover:bg-gray-50">
//                     <td className="px-6 py-4">{item.senderAddress}</td>
//                     <td className="px-6 py-4">{item.receiverAddress}</td>
//                     <td className="px-6 py-4">
//                       <input
//                         type="text"
//                         defaultValue={item.modifiedAddress || item.receiverAddress}
//                         onChange={(e) => { item.modifiedAddress = e.target.value }}
//                         className="border p-2 rounded-lg w-full text-gray-700"
//                       />
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex gap-4">
//                         <button
//                           onClick={() => handleSendNotification(item.receiverPhone)}
//                           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//                         >
//                           <FaBell className="inline-block mr-2" /> Send Notification
//                         </button>
//                         <button
//                           onClick={() => handleApprove(item.id)}
//                           className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//                         >
//                           <FaCheckCircle className="inline-block mr-2" /> Approve
//                         </button>
//                         <button
//                           onClick={() => handleReject(item.id)}
//                           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//                         >
//                           <FaTimesCircle className="inline-block mr-2" /> Reject
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </section>

//       {/* Pincode Merge Section */}
//       <section className="bg-white shadow-lg rounded-lg p-8 space-y-6">
//         <h2 className="text-2xl font-semibold text-gray-800">Merge Parcels by Pincode</h2>
//         <button
//           onClick={handleMergePinCodes}
//           className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
//         >
//           Merge Parcels with Same Pincode
//         </button>

//         {/* Display merged data */}
//         {mergedPinCodes.length > 0 && (
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Merged Parcels</h3>
//             <table className="w-full text-left table-auto border-collapse rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-800">
//                   <th className="px-6 py-4">Sender Address</th>
//                   <th className="px-6 py-4">Receiver Address</th>
//                   <th className="px-6 py-4">Merged Parcels</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mergedPinCodes.map((group, index) => (
//                   <tr key={index} className="border-t hover:bg-gray-50">
//                     <td className="px-6 py-4">
//                       {group.map((item) => item.senderAddress).join(', ')}
//                     </td>
//                     <td className="px-6 py-4">
//                       {group.map((item) => item.receiverAddress).join(', ')}
//                     </td>
//                     <td className="px-6 py-4">{group.length} parcels merged</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default OperatorDashboard;





// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaSave } from 'react-icons/fa';

// const OperatorDashboard = () => {
//   const [addressRequests, setAddressRequests] = useState([]);
//   const [isEditing, setIsEditing] = useState(null);
//   const [modifiedReceiverAddress, setModifiedReceiverAddress] = useState("");
//   const [image, setImage] = useState(null);

//   // Fetch Address Requests (Mock API Call)
//   useEffect(() => {
//     const fetchAddressRequests = async () => {
//       const mockRequests = [
//         { 
//           id: 1, 
//           senderAddress: '123 Main St, City A', 
//           receiverAddress: '456 Market Rd, City B', 
//           modifiedReceiverAddress: '', 
//           senderPhone: '9876543210', 
//           receiverPhone: '1234567890' 
//         },
//         { 
//           id: 2, 
//           senderAddress: '789 Oak St, City C', 
//           receiverAddress: '101 Pine Rd, City D', 
//           modifiedReceiverAddress: '', 
//           senderPhone: '1122334455', 
//           receiverPhone: '9988776655' 
//         },
//       ];
//       setAddressRequests(mockRequests);
//     };
//     fetchAddressRequests();
//   }, []);

//   // Handle Image Upload
//   const handleImageUpload = (event) => {
//     const uploadedImage = event.target.files[0];
//     setImage(URL.createObjectURL(uploadedImage));
//   };

//   // Start editing receiver address
//   const handleEdit = (id, currentReceiverAddress) => {
//     setIsEditing(id);
//     setModifiedReceiverAddress(currentReceiverAddress);
//   };

//   // Save modified receiver address
//   const handleSave = (id) => {
//     setAddressRequests(
//       addressRequests.map((request) =>
//         request.id === id
//           ? { ...request, modifiedReceiverAddress: modifiedReceiverAddress }
//           : request
//       )
//     );
//     setIsEditing(null);
//     setModifiedReceiverAddress(""); // Clear input field after save
//     alert(`Receiver Address for ID ${id} modified successfully!`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Header */}
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Operator Dashboard</h1>

//       {/* Image Upload Section */}
//       <section className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Image</h2>
//         <input 
//           type="file" 
//           onChange={handleImageUpload} 
//           accept="image/*" 
//           className="mb-4 border border-gray-300 p-2 rounded-md w-full" 
//         />
//         {image && (
//           <div className="mt-4">
//             <h3 className="text-lg font-semibold text-gray-800">Uploaded Image:</h3>
//             <img src={image} alt="Uploaded" className="max-w-full h-auto rounded-md mt-2" />
//           </div>
//         )}
//       </section>

//       {/* Address Management Table */}
//       <section className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Address Requests</h2>
//         {addressRequests.length > 0 ? (
//           <table className="table-auto w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-200 text-gray-800">
//                 <th className="px-4 py-2">Sender Address</th>
//                 <th className="px-4 py-2">Receiver Address</th>
//                 <th className="px-4 py-2">Modified Receiver Address</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {addressRequests.map((req) => (
//                 <tr key={req.id} className="border-t">
//                   <td className="px-4 py-2">{req.senderAddress}</td>
//                   <td className="px-4 py-2">{req.receiverAddress}</td>
//                   <td className="px-4 py-2">
//                     {isEditing === req.id ? (
//                       <input
//                         type="text"
//                         value={modifiedReceiverAddress}
//                         onChange={(e) => setModifiedReceiverAddress(e.target.value)}
//                         className="border border-gray-300 p-2 rounded-md w-full"
//                       />
//                     ) : (
//                       req.modifiedReceiverAddress || "Not Modified"
//                     )}
//                   </td>
//                   <td className="px-4 py-2">
//                     {isEditing === req.id ? (
//                       <button
//                         onClick={() => handleSave(req.id)}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//                       >
//                         <FaSave className="inline mr-2" /> Save
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => handleEdit(req.id, req.receiverAddress)}
//                         className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
//                       >
//                         <FaEdit className="inline mr-2" /> Modify Receiver Address
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="text-gray-600">No address requests available.</p>
//         )}
//       </section>

//     </div>
//   );
// };

// export default OperatorDashboard;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaBell, FaCheckCircle, FaTimesCircle, FaUpload } from 'react-icons/fa';

// const OperatorDashboard = () => {
//   const [image, setImage] = useState(null);
//   const [imageInfo, setImageInfo] = useState([]);
//   const [mergedPinCodes, setMergedPinCodes] = useState([]);
//   const [modifiedAddresses, setModifiedAddresses] = useState({});

//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleImageSubmit = async () => {
//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       await axios.post('http://localhost:8000/upload-image/', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       fetchImageData();
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   const fetchImageData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/get-image-data/');
//       setImageInfo(response.data);
//     } catch (error) {
//       console.error('Error fetching image data:', error);
//     }
//   };

//   const handleModifyAddress = async (id, newAddress) => {
//     try {
//       await axios.post('http://localhost:8000/modify-address/', { id, newAddress });
//       alert('Address modified successfully!');
//       fetchImageData();
//     } catch (error) {
//       console.error('Error modifying address:', error);
//     }
//   };

//   const handleSendNotification = (phoneNumber) => {
//     alert(`Notification sent to ${phoneNumber}`);
//   };

//   const handleApprove = (id) => {
//     alert(`Request approved for ID: ${id}`);
//   };

//   const handleReject = (id) => {
//     alert(`Request rejected for ID: ${id}`);
//   };

//   const handleMergePinCodes = () => {
//     const pinCodeGroups = imageInfo.reduce((acc, item) => {
//       const { pinCode } = item.senderAddress;
//       if (!acc[pinCode]) {
//         acc[pinCode] = [];
//       }
//       acc[pinCode].push(item);
//       return acc;
//     }, {});

//     const mergedData = Object.values(pinCodeGroups).filter(group => group.length > 1);
//     setMergedPinCodes(mergedData);
//   };

//   const handleAddressChange = (id, newAddress) => {
//     setModifiedAddresses(prevState => ({
//       ...prevState,
//       [id]: newAddress,
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Operator Dashboard</h1>

//       {/* Image Upload and Address Management Section */}
//       <section className="bg-white shadow-lg rounded-lg p-8 mb-8 space-y-6">
//         <h2 className="text-2xl font-semibold text-gray-800">Upload Image & Manage Addresses</h2>

//         {/* Image Upload */}
//         <div className="flex items-center gap-4">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="border p-3 rounded-lg w-full text-gray-700"
//           />
//           <button
//             onClick={handleImageSubmit}
//             className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
//           >
//             <FaUpload className="inline-block mr-2" /> Upload Image
//           </button>
//         </div>

//         {/* Image Data Table */}
//         {imageInfo.length > 0 && (
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploaded Image Data</h3>
//             <table className="w-full text-left table-auto border-collapse rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-800">
//                   <th className="px-6 py-4">Sender Address</th>
//                   <th className="px-6 py-4">Receiver Address</th>
//                   <th className="px-6 py-4">Modified Address</th>
//                   <th className="px-6 py-4">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {imageInfo.map((item, index) => (
//                   <tr key={index} className="border-t hover:bg-gray-50">
//                     <td className="px-6 py-4">{item.senderAddress}</td>
//                     <td className="px-6 py-4">{item.receiverAddress}</td>
//                     <td className="px-6 py-4">
//                       <input
//                         type="text"
//                         value={modifiedAddresses[item.id] || item.receiverAddress}
//                         onChange={(e) => handleAddressChange(item.id, e.target.value)}
//                         className="border p-2 rounded-lg w-full text-gray-700"
//                       />
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex gap-4">
//                         <button
//                           onClick={() => handleSendNotification(item.receiverPhone)}
//                           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//                         >
//                           <FaBell className="inline-block mr-2" /> Send Notification
//                         </button>
//                         <button
//                           onClick={() => handleApprove(item.id)}
//                           className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//                         >
//                           <FaCheckCircle className="inline-block mr-2" /> Approve
//                         </button>
//                         <button
//                           onClick={() => handleReject(item.id)}
//                           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//                         >
//                           <FaTimesCircle className="inline-block mr-2" /> Reject
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </section>

//       {/* Pincode Merge Section */}
//       <section className="bg-white shadow-lg rounded-lg p-8 space-y-6">
//         <h2 className="text-2xl font-semibold text-gray-800">Merge Parcels by Pincode</h2>
//         <button
//           onClick={handleMergePinCodes}
//           className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
//         >
//           Merge Parcels with Same Pincode
//         </button>

//         {/* Display merged data */}
//         {mergedPinCodes.length > 0 && (
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Merged Parcels</h3>
//             <table className="w-full text-left table-auto border-collapse rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-800">
//                   <th className="px-6 py-4">Sender Address</th>
//                   <th className="px-6 py-4">Receiver Address</th>
//                   <th className="px-6 py-4">Merged Parcels</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mergedPinCodes.map((group, index) => (
//                   <tr key={index} className="border-t hover:bg-gray-50">
//                     <td className="px-6 py-4">
//                       {group.map((item) => item.senderAddress).join(', ')}
//                     </td>
//                     <td className="px-6 py-4">
//                       {group.map((item) => item.receiverAddress).join(', ')}
//                     </td>
//                     <td className="px-6 py-4">{group.length} parcels merged</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default OperatorDashboard;











// import React, { useState } from 'react';
// import { FaBell, FaCheckCircle, FaTimesCircle, FaUpload } from 'react-icons/fa';

// const OperatorDashboard = () => {
//   const [image, setImage] = useState(null);
//   const [imageInfo, setImageInfo] = useState([
//     {
//       id: 1,
//       senderAddress: '123 Sender St, City A, 123456',
//       receiverAddress: '456 Receiver Rd, City B, 654321',
//       receiverPhone: '9876543210',
//     },
//     {
//       id: 2,
//       senderAddress: '789 Sender Ln, City C, 789123',
//       receiverAddress: '321 Receiver Ave, City D, 321987',
//       receiverPhone: '8765432109',
//     },
//   ]);
//   const [mergedPinCodes, setMergedPinCodes] = useState([]);
//   const [modifiedAddresses, setModifiedAddresses] = useState({});

//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleImageSubmit = () => {
//     alert('Dummy upload functionality triggered.');
//   };

//   const handleSendNotification = (phoneNumber) => {
//     alert(`Notification sent to ${phoneNumber}`);
//   };

//   const handleApprove = (id) => {
//     alert(`Request approved for ID: ${id}`);
//   };

//   const handleReject = (id) => {
//     alert(`Request rejected for ID: ${id}`);
//   };

//   const handleMergePinCodes = () => {
//     const pinCodeGroups = imageInfo.reduce((acc, item) => {
//       const pinCode = item.senderAddress.split(', ').pop();
//       if (!acc[pinCode]) {
//         acc[pinCode] = [];
//       }
//       acc[pinCode].push(item);
//       return acc;
//     }, {});

//     const mergedData = Object.values(pinCodeGroups).filter((group) => group.length > 1);
//     setMergedPinCodes(mergedData);
//   };

//   const handleAddressChange = (id, newAddress) => {
//     setModifiedAddresses((prevState) => ({
//       ...prevState,
//       [id]: newAddress,
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Operator Dashboard</h1>

//       <section className="bg-white shadow-lg rounded-lg p-8 mb-8 space-y-6">
//         <h2 className="text-2xl font-semibold text-gray-800">Upload Image & Manage Addresses</h2>

//         <div className="flex items-center gap-4">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="border p-3 rounded-lg w-full text-gray-700"
//           />
//           <button
//             onClick={handleImageSubmit}
//             className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
//           >
//             <FaUpload className="inline-block mr-2" /> Upload Image
//           </button>
//         </div>

//         {imageInfo.length > 0 && (
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploaded Image Data</h3>
//             <table className="w-full text-left table-auto border-collapse rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-800">
//                   <th className="px-6 py-4">Sender Address</th>
//                   <th className="px-6 py-4">Receiver Address</th>
//                   <th className="px-6 py-4">Modified Address</th>
//                   <th className="px-6 py-4">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {imageInfo.map((item) => (
//                   <tr key={item.id} className="border-t hover:bg-gray-50">
//                     <td className="px-6 py-4">{item.senderAddress}</td>
//                     <td className="px-6 py-4">{item.receiverAddress}</td>
//                     <td className="px-6 py-4">
//                       <input
//                         type="text"
//                         value={modifiedAddresses[item.id] || item.receiverAddress}
//                         onChange={(e) => handleAddressChange(item.id, e.target.value)}
//                         className="border p-2 rounded-lg w-full text-gray-700"
//                       />
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex gap-4">
//                         <button
//                           onClick={() => handleSendNotification(item.receiverPhone)}
//                           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//                         >
//                           <FaBell className="inline-block mr-2" /> Send Notification
//                         </button>
//                         <button
//                           onClick={() => handleApprove(item.id)}
//                           className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//                         >
//                           <FaCheckCircle className="inline-block mr-2" /> Approve
//                         </button>
//                         <button
//                           onClick={() => handleReject(item.id)}
//                           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//                         >
//                           <FaTimesCircle className="inline-block mr-2" /> Reject
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </section>

//       <section className="bg-white shadow-lg rounded-lg p-8 space-y-6">
//         <h2 className="text-2xl font-semibold text-gray-800">Merge Parcels by Pincode</h2>
//         <button
//           onClick={handleMergePinCodes}
//           className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
//         >
//           Merge Parcels with Same Pincode
//         </button>

//         {mergedPinCodes.length > 0 && (
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Merged Parcels</h3>
//             <table className="w-full text-left table-auto border-collapse rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-800">
//                   <th className="px-6 py-4">Sender Address</th>
//                   <th className="px-6 py-4">Receiver Address</th>
//                   <th className="px-6 py-4">Merged Parcels</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mergedPinCodes.map((group, index) => (
//                   <tr key={index} className="border-t hover:bg-gray-50">
//                     <td className="px-6 py-4">
//                       {group.map((item) => item.senderAddress).join(', ')}
//                     </td>
//                     <td className="px-6 py-4">
//                       {group.map((item) => item.receiverAddress).join(', ')}
//                     </td>
//                     <td className="px-6 py-4">{group.length} parcels merged</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default OperatorDashboard;










import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaUpload, FaBell } from "react-icons/fa";

const OperatorDashboard = () => {
  const [image, setImage] = useState(null);
  const [imageInfo, setImageInfo] = useState([
    {
      id: 1,
      senderAddress: "123 Main Street, Cityville",
      receiverAddress: "456 Elm Street, Townsville",
    },
    {
      id: 2,
      senderAddress: "789 Oak Street, Metropolis",
      receiverAddress: "101 Pine Street, Villagetown",
    },
    {
      id: 3,
      senderAddress: "555 Maple Avenue, Suburbia",
      receiverAddress: "222 Birch Lane, Ruralplace",
    },
  ]);
  const [approvedAddresses, setApprovedAddresses] = useState([]);
  const [rejectedAddresses, setRejectedAddresses] = useState([]);
  const [modifiedAddresses, setModifiedAddresses] = useState({});

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    alert("Image uploaded successfully (simulated).");
  };

  const handleApprove = (id) => {
    const approvedItem = imageInfo.find((item) => item.id === id);
    if (approvedItem) {
      const updatedReceiverAddress = modifiedAddresses[id] || approvedItem.receiverAddress;
      setApprovedAddresses((prev) => [
        ...prev,
        { ...approvedItem, receiverAddress: updatedReceiverAddress },
      ]);
      setImageInfo((prev) => prev.filter((item) => item.id !== id));
      alert(`Address approved for ID: ${id}`);
    }
  };

  const handleReject = (id) => {
    const rejectedItem = imageInfo.find((item) => item.id === id);
    if (rejectedItem) {
      setRejectedAddresses((prev) => [...prev, rejectedItem]);
      setImageInfo((prev) => prev.filter((item) => item.id !== id));
      alert(`Address rejected for ID: ${id}`);
    }
  };

  const handleNotification = (id) => {
    const sender = imageInfo.find((item) => item.id === id)?.senderAddress;
    alert(`Notification sent to sender at: ${sender}`);
  };

  const handleAddressChange = (id, newAddress) => {
    setModifiedAddresses((prevState) => ({
      ...prevState,
      [id]: newAddress,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Operator Dashboard</h1>

      {/* Image Upload Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Upload Image & Manage Addresses</h2>

        <div className="flex items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-3 rounded-lg w-full text-gray-700"
          />
          <button
            onClick={() => alert("Simulated image submission")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            <FaUpload className="inline-block mr-2" /> Upload Image
          </button>
        </div>

        {imageInfo.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploaded Image Data</h3>
            <table className="w-full text-left table-auto border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-6 py-4">Sender Address</th>
                  <th className="px-6 py-4">Receiver Address</th>
                  <th className="px-6 py-4">Modified Address</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {imageInfo.map((item, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4">{item.senderAddress}</td>
                    <td className="px-6 py-4">{item.receiverAddress}</td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={modifiedAddresses[item.id] || item.receiverAddress}
                        onChange={(e) => handleAddressChange(item.id, e.target.value)}
                        className="border p-2 rounded-lg w-full text-gray-700"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                        >
                          <FaCheckCircle className="inline-block mr-2" /> Approve
                        </button>
                        <button
                          onClick={() => handleReject(item.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                          <FaTimesCircle className="inline-block mr-2" /> Reject
                        </button>
                        <button
                          onClick={() => handleNotification(item.id)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                          <FaBell className="inline-block mr-2" /> Notify
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Approved Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8 space-y-6">
        <h2 className="text-2xl font-semibold text-green-600">Approved Addresses</h2>
        {approvedAddresses.length > 0 ? (
          <ul>
            {approvedAddresses.map((item, index) => (
              <li key={index} className="border-b py-2">
                {item.senderAddress} → {item.receiverAddress}
              </li>
            ))}
          </ul>
        ) : (
          <p>No approved addresses yet.</p>
        )}
      </section>

      {/* Rejected Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-red-600">Rejected Addresses</h2>
        {rejectedAddresses.length > 0 ? (
          <ul>
            {rejectedAddresses.map((item, index) => (
              <li key={index} className="border-b py-2">
                {item.senderAddress} → {item.receiverAddress}
              </li>
            ))}
          </ul>
        ) : (
          <p>No rejected addresses yet.</p>
        )}
      </section>
    </div>
  );
};

export default OperatorDashboard;


// import React, { useState } from "react";
// import { FaCheckCircle, FaTimesCircle, FaUpload, FaBell, FaObjectGroup } from "react-icons/fa";

// const OperatorDashboard = () => {
//   const [image, setImage] = useState(null);
//   const [imageInfo, setImageInfo] = useState([
//     { id: 1, senderAddress: "123 Main Street, Cityville", receiverAddress: "456 Elm Street, Townsville" },
//     { id: 2, senderAddress: "789 Oak Street, Metropolis", receiverAddress: "101 Pine Street, Villagetown" },
//     { id: 3, senderAddress: "555 Maple Avenue, Suburbia", receiverAddress: "222 Birch Lane, Ruralplace" },
//   ]);
//   const [approvedAddresses, setApprovedAddresses] = useState([]);
//   const [rejectedAddresses, setRejectedAddresses] = useState([]);
//   const [mergedParcels, setMergedParcels] = useState([]);
//   const [selectedParcels, setSelectedParcels] = useState([]);

//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//     alert("Image uploaded successfully (simulated).");
//   };

//   const handleApprove = (id) => {
//     const approvedItem = imageInfo.find((item) => item.id === id);
//     if (approvedItem) {
//       setApprovedAddresses([...approvedAddresses, approvedItem]);
//       setImageInfo(imageInfo.filter((item) => item.id !== id));
//       alert(`Address approved for ID: ${id}`);
//     }
//   };

//   const handleReject = (id) => {
//     const rejectedItem = imageInfo.find((item) => item.id === id);
//     if (rejectedItem) {
//       setRejectedAddresses([...rejectedAddresses, rejectedItem]);
//       setImageInfo(imageInfo.filter((item) => item.id !== id));
//       alert(`Address rejected for ID: ${id}`);
//     }
//   };

//   const handleNotification = (id) => {
//     const sender = imageInfo.find((item) => item.id === id)?.senderAddress;
//     alert(`Notification sent to sender at: ${sender}`);
//   };

//   const toggleSelectParcel = (id) => {
//     if (selectedParcels.includes(id)) {
//       setSelectedParcels(selectedParcels.filter((parcelId) => parcelId !== id));
//     } else {
//       setSelectedParcels([...selectedParcels, id]);
//     }
//   };

//   const handleMergeParcels = () => {
//     if (selectedParcels.length < 2) {
//       alert("Please select at least two parcels to merge.");
//       return;
//     }
//     const parcelsToMerge = imageInfo.filter((item) => selectedParcels.includes(item.id));
//     const mergedSenderAddress = parcelsToMerge.map((item) => item.senderAddress).join(" | ");
//     const mergedReceiverAddress = parcelsToMerge.map((item) => item.receiverAddress).join(" | ");
//     const newMergedParcel = {
//       id: `merged-${Date.now()}`,
//       senderAddress: mergedSenderAddress,
//       receiverAddress: mergedReceiverAddress,
//     };

//     setMergedParcels([...mergedParcels, newMergedParcel]);
//     setImageInfo(imageInfo.filter((item) => !selectedParcels.includes(item.id)));
//     setSelectedParcels([]);
//     alert("Parcels merged successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Operator Dashboard</h1>

//       {/* Upload Image Section */}
//       <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
//         <div className="flex items-center gap-4">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="border p-3 rounded-lg w-full text-gray-700"
//           />
//           <button
//             onClick={() => alert("Image submission simulated")}
//             className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
//           >
//             <FaUpload className="inline-block mr-2" /> Upload
//           </button>
//         </div>
//       </section>

//       {/* Uploaded Data Section */}
//       <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Uploaded Addresses</h2>
//         {imageInfo.length > 0 ? (
//           <table className="w-full text-left table-auto">
//             <thead>
//               <tr className="bg-gray-100 text-gray-800">
//                 <th className="px-4 py-2">Select</th>
//                 <th className="px-4 py-2">Sender Address</th>
//                 <th className="px-4 py-2">Receiver Address</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {imageInfo.map((item) => (
//                 <tr key={item.id} className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-2">
//                     <input
//                       type="checkbox"
//                       checked={selectedParcels.includes(item.id)}
//                       onChange={() => toggleSelectParcel(item.id)}
//                     />
//                   </td>
//                   <td className="px-4 py-2">{item.senderAddress}</td>
//                   <td className="px-4 py-2">{item.receiverAddress}</td>
//                   <td className="px-4 py-2">
//                     <button
//                       onClick={() => handleApprove(item.id)}
//                       className="bg-green-500 text-white px-3 py-1 rounded-lg mr-2"
//                     >
//                       <FaCheckCircle /> Approve
//                     </button>
//                     <button
//                       onClick={() => handleReject(item.id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded-lg mr-2"
//                     >
//                       <FaTimesCircle /> Reject
//                     </button>
//                     <button
//                       onClick={() => handleNotification(item.id)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded-lg"
//                     >
//                       <FaBell /> Notify
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="text-gray-700">No uploaded addresses to display.</p>
//         )}
//         <button
//           onClick={handleMergeParcels}
//           className="mt-4 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition"
//         >
//           <FaObjectGroup className="inline-block mr-2" /> Merge Parcels
//         </button>
//       </section>

//       {/* Merged Parcels Section */}
//       <section className="bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-semibold mb-4">Merged Parcels</h2>
//         {mergedParcels.length > 0 ? (
//           <ul className="list-disc pl-6">
//             {mergedParcels.map((parcel, index) => (
//               <li key={index} className="mb-2">
//                 <strong>Sender:</strong> {parcel.senderAddress} <br />
//                 <strong>Receiver:</strong> {parcel.receiverAddress}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-700">No merged parcels yet.</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default OperatorDashboard;
// rDashboard;
