import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function getOne(id){
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function add(formData){
    return sendRequest(`${BASE_URL}/new`, 'POST', formData);
}

export async function update(formData, id){
    return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', formData);
}

export async function deletePost(id){
    return sendRequest(`${BASE_URL}/${id}/delete`, 'DELETE')
}