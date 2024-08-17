import dotenv from 'dotenv';

dotenv.config();

export default {
  apiKey: process.env.CALENDARIFIC_API_KEY,
  apiUrl: process.env.CALENDARIFIC_API_URL,
  cacheTTL: parseInt(process.env.CACHE_TTL, 10) || 3600
};
