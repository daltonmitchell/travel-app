import sendRequest from "./send-request";
const BASE_URL = '/api/profiles';

export function add(formData){
    return sendRequest(BASE_URL, 'POST', formData);
}