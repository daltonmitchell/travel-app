import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function get(){
    return sendRequest(BASE_URL);
}

export async function add(formData){
    return sendRequest(`${BASE_URL}/new`, 'POST', formData);
}