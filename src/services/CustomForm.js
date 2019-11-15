import axios from 'axios';
import { formDataFrom } from '../helpers/form_data';

const headers = {
  headers: {
    'Content-Type': 'multipart/form-data',
  }
}
export const getForm = (url) =>{
  return axios.get(url);
}

export const submitForm = (url, data) => {
  return axios.post(url, formDataFrom(data), headers);
}
