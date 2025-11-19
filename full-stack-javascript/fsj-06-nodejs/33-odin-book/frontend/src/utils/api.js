const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function getAuthHeaders() {
	const token = localStorage.getItem("token");
	return token ? { Authorization: `Bearer ${token}` } : {};
}

export const api = {
	get: (endpoint) => {
		return fetch(`${API_URL}${endpoint}`, {
			headers: getAuthHeaders(),
		});
	},
	post: (endpoint, data) => {
		const headers = {
			"Content-Type": "application/json",
			...getAuthHeaders(),
		};
		return fetch(`${API_URL}${endpoint}`, {
			method: "POST",
			headers,
			body: JSON.stringify(data),
		});
	},
};
