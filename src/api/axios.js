import  axios from 'axios'
import { deleteCookie, getCookie, setCookie } from 'cookies-next';


const instance = axios.create({
   baseURL: process.env.BASE_URL,
   timeout: 5000,
   headers: { 'X-Custom-Header': 'foobar' }
});

instance.interceptors.request.use(function (config) {
   const asscess_token = getCookie('access_token')
   if(asscess_token){
      config.headers['Authorization'] = `Bearer ${asscess_token}`;
   }

   return config;
}, function (error) {
   return error
});


instance.interceptors.response.use(function (response) {
   if(response.status===409){
      deleteCookie('access_token')
      window.location.href = `${process.env.REACT_APP_BASE_HREF}/`;
   }
 
   return response;
}, function (error) {

   return error
});
export default instance