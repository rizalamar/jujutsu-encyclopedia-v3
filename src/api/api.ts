import axios from "axios";

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000,
});

/**
 * REQUEST INTERCEPTORS
 * Fokus: Logging & Setup (Meskipun tanpa token)
 */
api.interceptors.request.use(
	(config) => {
		console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

/**
 * RESPONSE INTERCEPTORS
 * Fokus: Unwrapping data global error handling
 */
api.interceptors.response.use(
	(response) => response.data,
	(error) => {
		let message = error.response?.data?.message || "Something went wrong";

		if (error.response?.status === 404) {
			console.warn("Data not found (404)");
		} else if (error.response?.status === 429) {
			message = "Too many requests to Jikan API. Please wait a moment and try again.";
		} else if (error.response?.status === 502 || error.response?.status === 503 || error.response?.status === 504) {
			message = "Jikan API is currently unavailable or busy. Please try again shortly.";
		} else if (error.code === "ERR_NETWORK") {
			console.error("Network error, check your internet connection");
		}

		return Promise.reject(new Error(message));
	}
);
