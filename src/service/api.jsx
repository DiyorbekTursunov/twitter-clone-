import axios from "axios";
import { getItem } from "../helpers/local-storage";

axios.defaults.baseURL = 'https://api.realworld.io/api'

axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authorization = token ? `Token ${token}` : ''
    config.headers.authorization = authorization
    return config
})
export default axios