module.exports = {
  read:function (req, res){
    res.send(req.session.cart);
  },
  create:function (req, res){
    req.session.cart = req.session.cart || [];
    req.session.cart.push(req.body);
    res.send(req.session.cart);
  },
}
