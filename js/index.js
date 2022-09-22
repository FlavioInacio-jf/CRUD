import { renderRegister } from './render-register.js';
import { getAllRegistersService } from './get-all-registers.service.js';

const tableBody = document.querySelector('.table tbody')

const allRegisters = await getAllRegistersService();

allRegisters.forEach((register) => {
  const tr = renderRegister(register)
  tableBody.append(tr);
})
