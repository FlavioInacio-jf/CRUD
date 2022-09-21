export const createRegisterService = (register) => {
  await fetch(`${BASE_URL}`, { method: 'POST', body: register })


  window.location.replace('/');
}