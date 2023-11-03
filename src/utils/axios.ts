import axios from 'axios';

// On crée une instance d'axios avec des paramètres prédéfinis:
const instanceAxios = axios.create({
  baseURL: 'http://nicolas-van-hoove.vpnuser.lan:8000/api/',
  timeout: 1000,
});

export default instanceAxios;
