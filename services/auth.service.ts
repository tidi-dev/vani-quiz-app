import axios from 'axios';

const API_URL = 'http://localhost:3001/auth';

export async function login(phoneNumber: string, password: string): Promise<any> {
  try {
    const response = await axios.post(`${API_URL}/login`, { phone_number: phoneNumber, password });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
}

export async function signup(full_name: string, phone_number: string, password: string): Promise<string> {
  const response = await axios.post(`${API_URL}/register`, { full_name, phone_number, password });
  return response.data.accessToken;
}

// Add other auth-related API functions here
