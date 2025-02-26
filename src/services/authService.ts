import { fetchAPI } from "./api";

const API_URL = "http://localhost:3000";  // Ajusta esto a tu servidor

export const authService = {
  register: async (data: { nombre_completo: string; email: string; password: string }) => {
    return await fetchAPI(`${API_URL}/auth/register`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};