import express from 'express';
import { fetchHolidays, fetchCountries } from '../controllers/holidayController.js';

const router = express.Router();

router.get('/holidays', fetchHolidays);
router.get('/countries', fetchCountries);

export default router;
