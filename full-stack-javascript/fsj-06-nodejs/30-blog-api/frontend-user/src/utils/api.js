const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const api = {
  get: (endpoint, headers = {}) =>
    fetch(`${API_URL}${endpoint}`, { headers }),
  post: (endpoint, data, headers = { 'Content-Type': 'application/json' }) =>
    fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    }),
};
