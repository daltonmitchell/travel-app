import sendRequest from "./send-request";
const BASE_URL = '/api/profiles';

export async function add(formData){
    return sendRequest(`${BASE_URL}/new`, 'POST', formData);
}

export async function get(){
    return sendRequest(BASE_URL);
}