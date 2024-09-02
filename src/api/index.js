import axios from 'axios';
import {
    ADVANTAGE_LIST,
    CONTACT_LIST,
    CREATE_ORDER_ONLINE,
    CREATE_ORDER_PHONE,
    SERVICE_LIST,
    SPECIALIZATIONS_LIST,
    TECHNOLOGY_LIST
} from '../api/urls'

let serverUrl = 'http://localhost:8000';

export let serverBaseUrl = `${serverUrl}/api/`;

export const advantageList = await axios.get(`${serverBaseUrl}${ADVANTAGE_LIST}`).then(res => res.data);
export const serviceList = await axios.get(`${serverBaseUrl}${SERVICE_LIST}`).then(res => res.data);
export const contactList = await axios.get(`${serverBaseUrl}${CONTACT_LIST}`).then(res => res.data);
export const specilaizationList = await axios.get(`${serverBaseUrl}${SPECIALIZATIONS_LIST}`).then(res => res.data);
export const technologyList = await axios.get(`${serverBaseUrl}${TECHNOLOGY_LIST}`).then(res => res.data);
export function createOrderPhone(userData) {
    return axios.post(`${serverBaseUrl}${CREATE_ORDER_PHONE}`, userData)
}
export function createOrderOnline(userData) {
    return axios.post(`${serverBaseUrl}${CREATE_ORDER_ONLINE}`, userData)
}