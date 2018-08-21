DROP DATABASE IF EXISTS ng_rolodex;
DROP USER IF EXISTS ng_rolodex_user;
DROP USER IF EXISTS ng_rolodex_admin;

CREATE USER ng_rolodex_admin WITH ENCRYPTED PASSWORD 'password';

CREATE DATABASE ng_rolodex WITH OWNER ng_rolodex_admin;