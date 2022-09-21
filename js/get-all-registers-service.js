import { BASE_URL } from '../contants/endpoint.constant.js';

export const getAllRegistersService = async () => {
  const response = await fetch(`${BASE_URL}`)
  const json = await response.json();
  return json
}
