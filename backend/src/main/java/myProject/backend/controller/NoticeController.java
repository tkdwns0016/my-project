package myProject.backend.controller;

import myProject.backend.entity.Notice;
import myProject.backend.service.NoticeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/notice")
public class NoticeController {

    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService) {
        this.noticeService = noticeService;
    }

    @GetMapping
    private List<Notice> getNoticeList() {
        System.out.println("Hi");
        return noticeService.not();
    }

}
