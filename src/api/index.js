import axios from 'axios';
import {
    ADVANTAGE_LIST,
    CONTACT_LIST,
    SERVICE_LIST
} from '../api/urls'

let serverUrl = 'http://localhost:8000';

export let serverBaseUrl = `${serverUrl}/api/`;

export const advantageList = await axios.get(`${serverBaseUrl}${ADVANTAGE_LIST}`).then(res => res.data);
export const serviceList = await axios.get(`${serverBaseUrl}${SERVICE_LIST}`).then(res => res.data);
export const contactList = await axios.get(`${serverBaseUrl}${CONTACT_LIST}`).then(res => res.data);