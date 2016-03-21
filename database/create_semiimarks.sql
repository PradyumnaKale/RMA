CREATE TABLE rma.semiimarks
(
    student_id    int(10) NOT NULL,
    exam_year     int(10) NOT NULL,
    semester      int(2) NOT NULL,
    sub_id        varchar(10) NOT NULL,
    internal      int(10) NOT NULL,
    external      int(10) NOT NULL,
    total         int(10) NOT NULL,
    sub_grade     varchar(2) NOT NULL,
    PRIMARY KEY (student_id, sub_id)
)

ENGINE = InnoDB
COLLATE = 'utf8_general_ci'