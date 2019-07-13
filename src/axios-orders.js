import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-6ec09.firebaseio.com/np'
});

export default instance;