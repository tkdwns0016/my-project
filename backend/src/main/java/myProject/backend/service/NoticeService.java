package myProject.backend.service;

import myProject.backend.entity.Notice;
import myProject.backend.repository.NoticeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class NoticeService {

    private final NoticeRepository noticeRepository;

    public NoticeService(NoticeRepository noticeRepository) {
        this.noticeRepository = noticeRepository;
    }

    public List<Notice> not( ) {
        return noticeRepository.findAllByOrderByNoticeId();
    }

}
