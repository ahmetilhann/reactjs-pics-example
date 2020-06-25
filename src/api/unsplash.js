import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID -KyNL1J1NstvuMiW9gJwkPqvF-D0gsVysNOJV6qYQSg'
  }
});