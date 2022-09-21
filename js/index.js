const BASE_URL = 'https://gorest.co.in/public/v2/users'
const tableBody = document.querySelector('.table tbody')

const getAllRegistersService = async () => {
  const response = await fetch(`${BASE_URL}`,
    {
      headers: {'content-type': 'application/json'}
    }
  )
  const json = await response.json();
  return json
}



const allRegisters = await getAllRegistersService();

allRegisters.forEach((register) => {
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

  action.appendChild(buttonEdit);
  action.appendChild(buttonDelete);
  tr.appendChild(action);

  tableBody.append(tr);
})
