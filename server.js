const express  = require('express');
const next = require('next');
const mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      cookieParser = require('cookie-parser'),
      session = require('express-session');
const passportConf = require('./config/passport');
const secret = require('./config/secret');
const User = require('./models/user');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//Connect to Db
mongoose.connect(secret.database,(err)=>{
    if(err){console.error(err)}
    else{console.log("Database connected")}
},{useMongoClient:true})

app.prepare()
.then(() => {
  const server = express()

   //MIDDLEWARE
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: false}))
  server.use(cookieParser())
  server.use(session({
    secret: process.env.SESSION_SECRET || secret.key,
    resave: true,
    saveUninitialized: false
  }))
  server.use(passport.initialize())
  server.use(passport.session())


  server.get('/getuser',(req,res)=>{
      res.json(req.user);
  })

  server.get('/main',(req,res)=>{
      app.render(req,res,'/main',req.query);
  })

  server.post('/login',passport.authenticate('User',{failureRedirect:'/login'}),(req,res) => {
      res.redirect('/main');
  })
//   server.post('/login',passport.authenticate('Webmaster',{failureRedirect:'/login'}),(req,res) => {
//       res.redirect('/main');
//   })
//   server.post('/login',passport.authenticate('Admin',{failureRedirect:'/login'}),(req,res) => {
//       res.redirect('/main');
//   })

  server.post('/signup',(req,res) => {
      var user = new User();
      user.username = req.body.username;
      user.password = req.body.password;

      user.save((err,user) => {
          if(err){console.error("Error: ", err)}
          else{res.redirect('/login')}
      })
  })

  server.get('/logout',(req,res)=>{
          req.logout();
          res.redirect('/');

  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(secret.port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})