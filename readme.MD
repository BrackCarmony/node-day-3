Example server/config.js
```
module.exports = {
  port:3000,
  sessionObject:{
    secret: "nocares",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge:1000*60*60*24*31 }
  }
}
```
