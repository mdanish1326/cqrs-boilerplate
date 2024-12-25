import express from 'express';
import {createEmployee, getEmployee, updateEmployee} from '../controllers/index.js';

const employeeRouter = express.Router();

employeeRouter.get('/employees', getEmployee);
employeeRouter.post('/employees', createEmployee);
employeeRouter.put('/employees/:id', updateEmployee);

export default employeeRouter;
