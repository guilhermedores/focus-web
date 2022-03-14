import axios from 'axios';
import { urlBase } from './CONSTANTS';

const instance = axios.create({
  baseURL: urlBase
});

const tokenString = localStorage.getItem('token')
const userToken = JSON.parse("" + tokenString)

if(userToken !== '') {
  instance.defaults.headers.common['Authorization'] = "Bearer " + userToken;
}

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default instance;