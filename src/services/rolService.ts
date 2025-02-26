import { Rol } from "../types/types";
import { fetchAPI } from "./api";

export const rolService = {
  findAll: async (): Promise<Rol[]> => {
    return await fetchAPI('/roles');
  },
  findOne: async (id_rol: number): Promise<Rol> => {
    return await fetchAPI(`/roles/${id_rol}`);
  },
  create: async (data: Partial<Rol>): Promise<Rol> => {
    return await fetchAPI('/roles', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  update: async (id_rol: number, data: Partial<Rol>): Promise<Rol> => {
    return await fetchAPI(`/roles/${id_rol}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  remove: async (id_rol: number): Promise<void> => {
    return await fetchAPI(`/roles/${id_rol}`, {
      method: 'DELETE',
    });
  },
};
