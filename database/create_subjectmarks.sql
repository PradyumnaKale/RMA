CREATE TABLE rma.subjectmarks
(
    student_id    int(10) NOT NULL,
    exam_year     int(10) NOT NULL,
    semester      int(2) NOT NULL,
	sub_id        varchar(10) NOT NULL,
    sub_name      varchar(50) NOT NULL,
    internal      int(10) NOT NULL,
    external      int(10) NOT NULL,
    total         int(10) NOT NULL,
    sub_grade     varchar(2) NOT NULL,
    gpa           double(2,1) NOT NULL
)

ENGINE = InnoDB
COLLATE = 'utf8_general_ci'