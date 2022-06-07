import axios from "axios";

export const URL = process.env.API_URL;
export const VERSION = process.env.API_VERSION;
export const KEY = process.env.API_KEY;
export const LANG = process.env.API_LANG;

export const client = axios.create({
  baseURL: URL,
});
