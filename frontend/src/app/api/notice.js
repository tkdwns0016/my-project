import axios from 'axios';

const server = 'http://localhost:8080';
export async function getNoticeList() {
    try {
        const res = await axios.get(server + '/noticeList');
        return res.data;
    } catch(err) {
        alert('목록을 가져오지 못하였습니다.');
        return [];
    }
}