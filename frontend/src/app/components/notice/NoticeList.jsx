"use client";

import * as noticeApi from '@/api/notice';
import { useState, useEffect } from 'react';


export default function noticeList() {
    const [notices, setNotices] = useState([]);

 
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await noticeApi.getNoticeList();
                console.log(data);
                setNotices(data);
                
            } catch (error) {
                alert("공지사항 불러오기 실패");
                console.log("오류");
                console.error(error);
            }
        }
        getData();
        
        
    }, []);
    
    function replaceCreateDt(createDt) {
        return createDt.substring(0,10);
    }
    return (
        <div className="w-full max-w-4xl mx-auto mt-6">
            <div className="flex font-semibold bg-gray-100 border-b border-gray-400">
                <div className="flex-1 p-2">번호</div>
                <div className="flex-1 p-2">제목</div>
                <div className="flex-1 p-2">작성일</div>
                <div className="flex-1 p-2">조회수</div>
                <div className="flex-1 p-2">좋아요</div>
            </div>


            {notices.map((notice, idx) => (
                <div key={idx} className="flex border-b border-gray-200 hover:bg-gray-50">
                    <div className='flex-1 p-2 text-sm whitespace-nowrap'>{notice.noticeId}</div>
                    <div className='flex-1 p-2 text-sm whitespace-nowrap'>{notice.title}</div>
                    <div className='flex-1 p-2 text-sm whitespace-nowrap'>{replaceCreateDt(notice.createDt)}</div>
                    <div className='flex-1 p-2 text-sm whitespace-nowrap'>{notice.viewCount}</div>
                    <div className='flex-1 p-2 text-sm whitespace-nowrap'>{notice.likeCount}</div>
                </div>
            ))}
            
        </div>
    );
}