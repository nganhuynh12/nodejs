import userService from "../service/userService";

const handleHelloWord = (req, res) => {
  const name = "Ngan";
  return res.render("home.ejs", { name });
};

const userPage = (req, res) => {
  const user = "Ngan";
  return res.render("user.ejs", { user });
};

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  //   userService.handleCreateNewUser(email, password, username);
  userService.getUserList();
  return res.send("handleCreateNewUser");
};

module.exports = {
  handleHelloWord,
  userPage,
  handleCreateNewUser,
};
