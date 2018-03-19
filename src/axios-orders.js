import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://build-your-burger-3bcff.firebaseio.com'
})

export default instance;