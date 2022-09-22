import { BASE_URL } from '../contants/endpoint.constant.js';
import { TOKEN } from '../contants/token.constant.js';

export const getAllRegistersService = async () => {
  const response = await fetch(`${BASE_URL}`,
  {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    }
  })
  const json = await response.json();
  return json
}
