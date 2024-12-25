import { API_URL } from './_common';
import type { User } from './users.type';

export const getUserById = (id: number) => ({
  queryKey: ['getUserById', id],
  queryFn: async () => {
    const response = await fetch(`${API_URL}/users/${id}`);
    const data: User = await response.json();
    return data;
  },
});
