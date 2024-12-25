import express from 'express';
import {employeeRoutes} from './routes/index.js';

const app = express();
app.use(express.json());

app.use('/v1', employeeRoutes);

export default app;