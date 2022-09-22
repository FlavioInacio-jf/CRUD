import { getSingleRegisterService } from './get-single-register.service.js';
import { BASE_URL } from '../contants/endpoint.constant.js';
import { TOKEN } from '../contants/token.constant.js';

const loading = document.querySelector('.loading-container');
const form = document.getElementById('form-edit');
const name = document.getElementById('nome');
const genero = document.getElementById('genero');
const status = document.getElementById('status');
const email = document.getElementById('email');

const location = window.location.search;
const search = new URLSearchParams(location);
const register_id = search.get('id');

loading.style.display = 'flex';

const register = await getSingleRegisterService(register_id);
name.value = register.name;
genero.value = register.gender;
status.value = register.status;
email.value = register.email;

loading.style.display = 'none';

export const updateRegisterService = (id) => async (event) => {
  event.preventDefault();

  const { nome,genero, status, email } = event.target;

  const formData = new FormData();
  formData.set('name', nome.value);
  formData.set('gender', genero.value);
  formData.set('status', status.value);
  formData.set('email', email.value);

  await fetch(`${BASE_URL}/${id}`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
      },
      body: formData
    })

  window.alert('Registro atualizado');
  window.location.replace('/index.html');
}

form.addEventListener('submit', updateRegisterService(register.id));