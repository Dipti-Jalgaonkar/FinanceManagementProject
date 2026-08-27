/*
    ####### WHAT DOES THIS CODE DO? #######
    This code sets up a custom HTTP client (using Axios) that your app will use to talk to your backend API. 
    It does a few smart things automatically: it reads the API’s base URL from your environment settings, 
    always sends JSON headers, and remembers your login token (so you don’t have to attach it manually each time). 
    Before sending a request, it automatically adds the token to the request headers. If the token has expired and 
    the server replies with a 401 Unauthorized error, the code tries to refresh the token by calling a special endpoint (/user/auth/token/refresh/). 
    If the refresh works, it updates the token and retries the failed request for you. If it fails, it assumes the user is logged out. 
    In short, this file gives you a “smart fetcher” that handles authentication under the hood, so the rest of your 
    app can just call apiClient.get(...) or apiClient.post(...) without worrying about tokens.
*/

// Import axios HTTP client library
import axios from "axios";

// Get the API base URL from Vite environment variables (set in .env file)
const API_BASE = import.meta.env.VITE_API_URL;

// Create an axios instance (custom client) with default settings
const apiClient = axios.create({
    baseURL: API_BASE, // Every request will be prefixed with this base URL
    headers: { "Content-Type": "application/json" }, // Default header for JSON APIs
    withCredentials: true, // Allows sending cookies (needed for auth in some cases)
});

// Variable to store the current access token in memory
let accessToken: any = null;

// Function to update the access token when a user logs in or refreshes it
export const setAccessToken = (token: any) => {
    accessToken = token;
    // If a token exists, attach it as the default Authorization header
    if (token) {
        apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
    } else {
        // If no token, remove Authorization header
        delete apiClient.defaults.headers["Authorization"];
    }
};

// Request interceptor: runs before every request is sent
apiClient.interceptors.request.use((config) => {
    // If accessToken is set, attach it to the request headers
    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config; // Return the modified config
});

// Response interceptor: handles responses and errors globally
apiClient.interceptors.response.use(
    (response) => response, // If response is fine, just return it
    async (error) => {
        const originalRequest = error.config; // Keep a copy of the failed request

        // Check if error is 401 Unauthorized, request not retried yet,
        // and not coming from the refresh token endpoint itself
        if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== "user/auth/token/refresh/") {
            originalRequest._retry = true; // Mark request as retried (avoid infinite loop)

            try {
                // Try refreshing access token
                const { data } = await apiClient.post("user/auth/token/refresh/");

                // Save the new access token and update headers
                setAccessToken(data.access);

                // Retry the original request with the new token
                return apiClient(originalRequest);
            } catch (refreshError) {
                // If refresh also fails, user is effectively logged out
                console.log("Could not refresh token. User is logged out.");
                return Promise.reject(refreshError); // Pass error back
            }
        }

        // If error is not 401 or refresh fails, just reject it
        return Promise.reject(error);
    }
);

// Export the configured axios client for use in other files
export default apiClient;
