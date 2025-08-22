import NoticeList from '@/components/notice/NoticeList'

export default function notice() {


    return (
        <div className="ml-10 block bg-red-200 max-w-prose">
            <h1 className='text-3xl font-bold'>공지사항</h1>
            <NoticeList />
        </div>
    );
}