import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = (userData) => {
    return axios.post(`${API_URL}/api/auth/register`, userData);
};

export const loginUser = (userData) => {
    return axios.post(`${API_URL}/api/auth/login`, userData);
};

// Add other services like fetchProducts, createPost, etc.
