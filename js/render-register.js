import { deleteRegisterService } from './delete-register-service.js';

export const renderRegister = (register) => {
  const tr = document.createElement('tr');
  const id = document.createElement('td');
  const name = document.createElement('td');
  const email = document.createElement('td');
  const action = document.createElement('td');
  const buttonEdit = document.createElement('button');
  const buttonDelete = document.createElement('button');

  id.innerText =  register.id;
  name.innerText = register.name;
  email.innerText = register.email;
  buttonEdit.innerText = 'Editar';
  buttonDelete.innerText = 'Excluir';

  tr.appendChild(id);
  tr.appendChild(name);
  tr.appendChild(email);

  buttonDelete.addEventListener("click", async() =>  await deleteRegisterService(register.id));
  buttonEdit.addEventListener("click", () => window.location.replace(`/edit.html?${register.id}`));

  action.appendChild(buttonEdit);
  action.appendChild(buttonDelete);
  tr.appendChild(action);

  return tr;
}