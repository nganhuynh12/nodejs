import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10);
// get the client
import mysql2 from "mysql2";

// create the connection to database
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

let hardPassword = (hardPassword) => {
  return bcrypt.hashSync(hardPassword, salt);
};

let createNewUser = (email, password, username) => {
  let hardPass = hardPassword(password);
  // simple query
  connection.query(
    "INSERT INTO users(email, password, username) VALUES (?,?,?)",
    [email, password, username],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
};

const getUserList = () => {
  let user = [];
  connection.query("SELECT * FROM users", function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  });
};

module.exports = {
  createNewUser,
  getUserList,
};
