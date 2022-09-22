import { BASE_URL } from '../contants/endpoint.constant.js';
import { TOKEN } from '../contants/token.constant.js';

export const deleteRegisterService = async (id) => {
  await fetch(`${BASE_URL}/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
      }
    }
  )

  window.location.reload();
}