import axios from 'axios';
// Type
import type { AxiosRequestConfig } from 'axios';

// Configuration
const config: AxiosRequestConfig = {
  baseURL: process.env.API_SERVER
};

// Instance
export const api = axios.create(config);