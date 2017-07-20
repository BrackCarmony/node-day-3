const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config');

// Controllers
const cartCtrl = require('./controllers/cartCtrl')
const userCtrl = require('./controllers/userCtrl')
app.use(bodyParser.json());
app.use(session(config.sessionObject));
console.log(__dirname);
console.log(__filename);
app.use(express.static(`${__dirname}/../build`))

app.use((req, res, next)=>{
  console.log(req.session);
  next();
})

app.post('/api/login/:username', userCtrl.login)

app.get('/api/cart', cartCtrl.read)
app.post('/api/cart', cartCtrl.create)



app.listen(config.port, ()=>{
  console.log(`listening on port ${config.port}`);
})
