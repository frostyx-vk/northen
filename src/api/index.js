import axios from 'axios';
import {
    SERVICE_LIST
} from '../api/urls'

let serverUrl = 'http://localhost:8000';

export let serverBaseUrl = `${serverUrl}/api/`;

export const serviceList = await axios.get(`${serverBaseUrl}${SERVICE_LIST}`).then(res => res.data);