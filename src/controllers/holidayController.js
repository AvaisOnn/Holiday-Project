import { getHolidays, getCountries } from '../services/calendarificService.js';
import { getCache, setCache } from '../cache/cache.js';

export const fetchHolidays = async (req, res) => {
  const { country, year } = req.query;
  const cacheKey = `${country}-${year}-holidays`;

  let holidays = getCache(cacheKey);
  if (!holidays) {
    try {
      holidays = await getHolidays(country, year);
      setCache(cacheKey, holidays);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch holidays', error: error.message });
    }
  }

  res.json(holidays);
};

export const fetchCountries = async (req, res) => {
  const cacheKey = 'countries';

  let countries = getCache(cacheKey);
  if (!countries) {
    try {
      countries = await getCountries();
      setCache(cacheKey, countries);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch countries', error: error.message });
    }
  }

  res.json(countries);
};
