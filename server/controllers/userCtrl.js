module.exports = {
  login:function (req, res){
    req.session.username =  req.params.username;
    res.send("You are now logged in");
  }
}
