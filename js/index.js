import { renderRegister } from './render-register.js';
import { getAllRegistersService } from './get-all-registers.service.js';

const tableBody = document.querySelector('.table tbody')

const loading = document.querySelector('.loading-container');

loading.style.display = 'flex';
const allRegisters = await getAllRegistersService();
loading.style.display = 'none';

allRegisters.forEach((register) => {
  const tr = renderRegister(register)
  tableBody.append(tr);
})
