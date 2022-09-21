import { BASE_URL } from '../contants/endpoint.constant.js';

export const deleteRegisterService = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
}