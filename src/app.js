import express from 'express';
import holidayRoutes from './routes/holidayRoutes.js';

const app = express();

app.use(express.json());
app.use('/api', holidayRoutes);

export default app;
