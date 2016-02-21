CREATE TABLE rma.semtotal
(
    student_id    int(10) NOT NULL,
    examyear      int(10) NOT NULL,
    semester      int(2) NOT NULL,
    semgrade      varchar(2) NOT NULL,
    semgpa        double(2,1) NOT NULL
)

ENGINE = InnoDB
COLLATE = 'utf8_general_ci'