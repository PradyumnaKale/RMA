------------------------------------------------------------------
--  TABLE subjectsinexam
------------------------------------------------------------------
DROP TABLE IF EXISTS subjectsinexam;
CREATE TABLE subjectsinexam
(
   exam_year       int(6),
   exam_semester   int(2),
   subject_id      varchar(6),
   subject_type    varchar(2),
   edate           timestamp DEFAULT 'CURRENT_TIMESTAMP',
   minmarks        int(4),
   maxmarks        int(3)
);


