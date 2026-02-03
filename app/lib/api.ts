/**
 * Centralized API client with API key authentication
 */
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || ''

// Create axios instance with default headers
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(SECRET_KEY && { 'X-API-Key': SECRET_KEY }),
  },
})

// For file uploads, we need to set headers dynamically
export const createFormDataRequest = (formData: FormData) => {
  const headers: Record<string, string> = {
    'Content-Type': 'multipart/form-data',
  }
  
  if (SECRET_KEY) {
    headers['X-API-Key'] = SECRET_KEY
  }
  
  return headers
}

export { apiClient, API_URL }
export default apiClient
