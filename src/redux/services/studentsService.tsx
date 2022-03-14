import API from  './axiosConfig'

export const getAll = async () => {
  return await API.get('/v1/student')
}