export const fetchAPI = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json", // Asegúrate de enviar como JSON
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.text(); // Esto te ayudará a entender el error
    throw new Error(error || "Error en la solicitud");
  }

  return response.json(); // Suponiendo que el backend responde con JSON
};