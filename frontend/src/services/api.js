import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-base-url.com',
});

export const validateAddress = (address, pinCode) =>
  api.post('/validate', { address, pinCode });

export const fetchOperatorData = () => api.get('/operator/addresses');

export const approveCorrection = (id) => api.post(`/operator/approve/${id}`);

export default api;