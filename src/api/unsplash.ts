import axios from 'axios';

export const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 286369dd852e4a562dc0a452ff13d5591fb5c9d3675f53c885fd52938b7b7f11'
  }
});
