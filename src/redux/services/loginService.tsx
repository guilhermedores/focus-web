import Credentials from '../../pages/Login/credentials';
import API from './axiosConfig'

export const loginUser = async (credentials: Credentials) => { 
  const response = await API.post('/v1/user/login', credentials);
  return response;
}
