// API base URL comes from the environment (set on Vercel), never hard-coded.
// Locally, with no VITE_API_URL, fall back to the static sample menu.
export const API = import.meta.env.VITE_API_URL;

export const MENU_URL = API ? `${API}/api/menu` : "/menu.json";
