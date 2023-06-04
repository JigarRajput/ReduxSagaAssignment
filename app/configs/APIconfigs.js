import axios from 'axios';

// Axios Instance for configuring baseURL and timeout
export const publicInstance = axios.create({
  baseURL: 'https://api.chec.io/',
  headers: {
    'X-Authorization': 'pk_test_52391ee7f3e0042c126782e194a56ed0a955472862b5b',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
});

export const privateInstance = axios.create({
  baseURL: 'https://api.chec.io/',
  headers: {
    'X-Authorization': 'sk_523915be1c764ff4ff2ddf65db288a8eeb07182789475',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
});
