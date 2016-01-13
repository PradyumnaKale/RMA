------------------------------------------------------------------
--  TABLE students
------------------------------------------------------------------

DROP TABLE IF EXISTS students;
CREATE TABLE students
(
   rollno            int(10),
   firstname         varchar(20),
   lastname          varchar(20),
   fathersname       varchar(20),
   mothersname       varchar(20),
   dateofbirth       date,
   yearofadmission   int(6)
);


