CREATE TABLE rma.user_roles
(
    user_role_id    int(11)          DEFAULT 1 NOT NULL,
    username        varchar(50) NOT NULL,
    role            varchar(50)      DEFAULT 'student' NOT NULL,
    PRIMARY KEY (user_role_id)
)

ENGINE = InnoDB
COLLATE = 'utf8_general_ci';

ALTER TABLE rma.user_roles
   ADD UNIQUE KEY uni_username_role(role, username);

ALTER TABLE rma.user_roles
ADD KEY fk_username (username);

ALTER TABLE rma.user_roles
   ADD CONSTRAINT fk_username FOREIGN KEY(username)
       REFERENCES users(username);