const express = require("express");
const bodyParser = require("body-parser");
const mariadb = require("mariadb");

const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "jima",
});
