package myProject.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name = "NOTICE_POST")
public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NOTICE_ID")
    private int noticeId;

    @Column(name = "TITLE", nullable = false, length = 100)
    private String title;

    @Lob
    @Column(name = "CONTENT", nullable = false)
    private String content;

    @Column(name = "WRITER_ID", nullable = false, length = 15)
    private String writerId;

    @Column(name = "VIEW_COUNT", nullable = false)
    private int viewCount;

    @Column(name = "LIKE_COUNT", nullable = false)
    private int likeCount;

    @Column(name = "CREATE_DT", nullable = false)
    private LocalDateTime createDt;

    @Column(name = "UPDATE_DT")
    private LocalDateTime updateDt;

    @Column(name = "START_SHOW_DT", length = 8)
    private String startShowDt;

    @Column(name = "END_SHOW_DT", length = 8)
    private String endShowDt;

}
