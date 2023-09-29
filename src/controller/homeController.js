const handleHelloWord = (req, res) => {
  const name = "Ngan";
  return res.render("home.ejs", { name });
};

const userPage = (req, res) => {
  const user = "Ngan";
  return res.render("user.ejs", { user });
};
module.exports = {
  handleHelloWord,
  userPage,
};
