import { BASE_URL } from '../contants/endpoint.constant.js';
import { TOKEN } from '../contants/token.constant.js';

const form = document.getElementById('form-create');

export const createRegisterService = (event) => {
  event.preventDefault();

  const { nome,genero, status, email } = event.target;

  const formData = new FormData();
  formData.set('name', nome.value);
  formData.set('gender', genero.value);
  formData.set('status', status.value);
  formData.set('email', email.value);


    fetch(`${BASE_URL}`,
    { method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
      }
    }).then(()=> {
      window.alert('Produto cadastrado com sucesso!');
      window.location.replace('/');
    }).catch(()=> {
      window.alert('Erro ao cadastrar produto.');
    })
}

form.addEventListener('submit', createRegisterService);