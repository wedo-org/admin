const axios = require('axios')
const BASE_URL = 'http://localhost:3000/api/v1'
// const BASE_URL = 'https://infinite-wave-91297.herokuapp.com/api/v1'

const fetchEntries = async () => {
    const data = await axios(`${BASE_URL}/items/`);
    return data
}

const fetchPing = async () => {
    const data = await axios(`${BASE_URL}/ping/`);
    return data
}

const fetchPage = async (str) => {
    const data = await axios(`${BASE_URL}/pages${str}`);
    return data.data
}

const fetchPostEntry = async (dataObj) => {
    const data = await axios.post(`${BASE_URL}/items`, dataObj);
    return data.data
}

const fetchPatchEntry = async (id, dataObj) => {
    const data = await axios.post(`${BASE_URL}/items/${id}`, dataObj);
    return data.data
}

const fetchDeleteEntry = async (id) => {
    const data = await axios.delete(`${BASE_URL}/items/${id}`);
    return data.data
}

const fetchUsers = async (dataObj) => {
    const data = await axios(`${BASE_URL}/users`);
    return data.data
}

const fetchPostUser = async (dataObj) => {
    const data = await axios.post(`${BASE_URL}/users`, dataObj);
    return data.data
}

const fetchPatchUser = async (id, dataObj) => {
    const data = await axios.post(`${BASE_URL}/users/${id}`, dataObj);
    return data.data
}

const fetchDeleteUser = async (id) => {
    const data = await axios.delete(`${BASE_URL}/users/${id}`);
    return data.data
}

export { fetchEntries, fetchPage, fetchPing, fetchPostEntry, fetchPatchEntry, fetchDeleteEntry, fetchUsers, fetchPostUser, fetchPatchUser, fetchDeleteUser }
