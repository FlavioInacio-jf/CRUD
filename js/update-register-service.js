const form = document.querySelector('.form-edit');


export const updateRegisterService = async (event) => {
  event.preventDefault();

  const { id, ...rest } = register;
  await fetch(`${BASE_URL}/${id}`, { method: 'PATCH', body: rest})


  window.location.replace('/index.html');
}

form.addEventListener('submit', updateRegisterService);