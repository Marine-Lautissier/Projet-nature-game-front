import axios from 'axios';

// On crée une instance d'axios avec des paramètres prédéfinis:
const instanceAxios = axios.create({
  baseURL: 'http://nicolasvanhoove-server.eddi.cloud/naturegame/index.php/api/',
  timeout: 1000,
});

export default instanceAxios;
