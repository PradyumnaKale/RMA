CREATE TABLE rma.authorities
(
    username     varchar(50) NOT NULL,
    authority    varchar(50)      DEFAULT '''ROLE_STUDENT''' NOT NULL,
    PRIMARY KEY (username)
)

ENGINE = InnoDB
COLLATE = 'utf8_general_ci'