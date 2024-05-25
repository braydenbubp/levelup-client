// import { clientCredentials } from '../client';
const endpoint = 'http://localhost:8000';

const getEvents = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/events`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getEvents;
