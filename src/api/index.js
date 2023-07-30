import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "../utils";

// Custom Fetch function to dynamically add parameters and HTTP Request type
const customFetch = async (url, { body, ...customConfig }) => {
  // Retreives the JSON token
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  // Headers to add the Bearer token to Authorization key in Header
  const headers = {
    "content-type": "application/json",
    Accept: "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  // Configuration
  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    // Stringifying JSON object before sending it with the request
    config.body = JSON.stringify(body);
  }
  try {
    // Fetch
    const response = await fetch(url, config);

    // Handling Fetch response

    // Internal Server Error
    if (response.status === 500) throw new Error("Internal Server Error");

    const responseJSON = await response.json();
    // Request and response cycle is successful
    if (response.status === 200) {
      return {
        success: true,
        data: responseJSON.data,
      };
    } else {
      return {
        success: false,
        message: responseJSON.message,
      };
    }
  } catch (e) {
    console.log("Error", e.message);
    return {
      success: false,
      message: e.message,
    };
  }
};

// Sign up
export const signup = (formData) => {
  return customFetch(API_URLS.signup(), {
    body: { ...formData },
    method: "POST",
  });
};
// Login
export const login = (formData) => {
  return customFetch(API_URLS.login(), {
    body: { ...formData },
    method: "POST",
  });
};

export const addVital = (formData) => {
  return customFetch(API_URLS.addVital(), {
    body: { ...formData },
    method: "POST",
  });
};

export const getLatestVital = (vitalType) => {
  return customFetch(API_URLS.getLatestVital(vitalType), {
    method: "GET",
  });
};
