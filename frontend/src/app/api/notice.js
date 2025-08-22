import axios from 'axios';

const api = axios.create({
    baseURL : "http://localhost:8080"
});
export const getNoticeList = async () => {
    const res = await api.get('/notice');
    console.log(res.data);
    return res.data;
}