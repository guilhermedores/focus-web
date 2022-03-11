import axios from 'axios';
import { urlBase } from './CONSTANTS';

export default axios.create({
  baseURL: urlBase
});