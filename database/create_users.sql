CREATE TABLE rma.users
(
    username    varchar(20) NOT NULL,
    password    varchar(50) NOT NULL,
    enabled     tinyint(1)       DEFAULT 1 NOT NULL,
    PRIMARY KEY (username)
)

ENGINE = InnoDB
COLLATE = 'utf8_general_ci'