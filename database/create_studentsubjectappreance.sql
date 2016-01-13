
DROP TABLE IF EXISTS studentsubjectappreance;
CREATE TABLE studentsubjectappreance
(
   students_rollno         int(10),
   subject_exam_year       int(6),
   subject_exam_semester   int(2),
   subject_id              varchar(6),
   subject_type            varchar(2),
   marksobtained           int(3),
   grade                   varchar(2),
   gpa                     decimal(2, 1),
   absent                  tinyint(1),
   kt                      tinyint(1)
);

ALTER TABLE studentsubjectappreance
   ADD CONSTRAINT `fk_subject_exam_year` FOREIGN KEY
          (subject_exam_year,
           subject_exam_semester,
           subject_id,
           subject_type);
          REFERENCES subjectsinexam(exam_year,
                                    exam_semester,
                                    subject_id,
                                    subject_type);

