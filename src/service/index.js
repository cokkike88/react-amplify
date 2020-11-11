import axios from 'axios';
import config from '../config';

console.log('CONFIG', config);

const instance = axios.create({
    baseURL: config.endpoint,
    timeout: 10000
});

export default instance;

