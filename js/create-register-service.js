import { BASE_URL } from '../contants/endpoint.constant.js';

const form = document.getElementById('form-create');

export const createRegisterService = async (event) => {
  event.preventDefault();

  const { nome,genero, status, email } = event.target;

  const formData = new FormData();
  formData.set('name', nome.value);
  formData.set('gender', genero.value);
  formData.set('status', status.value);
  formData.set('email', email.value);

  await fetch(`${BASE_URL}`, { method: 'POST', body: formData })

  window.location.replace('/');
}

form.addEventListener('submit', createRegisterService);