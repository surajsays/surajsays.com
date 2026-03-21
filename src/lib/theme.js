import { writable } from 'svelte/store';

// 'browser' check — localStorage only exists in browser
// during npm run build it runs on server where localStorage doesn't exist
import { browser } from '$app/environment';

const saved = browser
  ? localStorage.getItem('theme') || 'dark'
  : 'dark';

export const theme = writable(saved);
