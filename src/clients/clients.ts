/* Local dependencies */
import axios from 'axios';

// Axios Instance
export const ddbClient = axios.create({
  baseURL: 'https://janara-wedding.herokuapp.com/api',
});
