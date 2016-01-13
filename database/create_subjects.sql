------------------------------------------------------------------
--  TABLE subjects
------------------------------------------------------------------
DROP TABLE IF EXISTS subjects;
CREATE TABLE subjects
(
   sid           varchar(6),
   stype         varchar(2),
   semester      int(2),
   levelyear     int(2),
   sname         varchar(50),
   description   varchar(100)
);


