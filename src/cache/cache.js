import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: process.env.CACHE_TTL });

export const getCache = (key) => cache.get(key);
export const setCache = (key, value) => cache.set(key, value);
