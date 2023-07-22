import axios from 'axios';

// For Front-End port to Server Port request.
const instance = axios.create({
  baseURL: 'http://localhost:5000' 
});

export default instance;