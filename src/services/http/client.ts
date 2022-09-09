import axios from 'axios';

export const URL = 'http://ddragon.leagueoflegends.com/';
export const VERSION = '12.10.1';
export const LANG = 'ru_RU';
//export const KEY = process.env.API_KEY;

export const client = axios.create({
  baseURL: URL,
});
