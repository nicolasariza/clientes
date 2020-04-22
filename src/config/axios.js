import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://apiclients.herokuapp.com/api'
});

export default clienteAxios;