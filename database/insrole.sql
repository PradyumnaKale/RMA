CREATE TRIGGER insert_to_user_role
   AFTER INSERT
   ON rma.users
   FOR EACH ROW
BEGIN
   INSERT INTO rma.user_roles (username)
        VALUES (new.username);
END;