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
const Admin = require('./models/Admin');
const Products = require('./models/product');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//Connect to Db
mongoose.connect(secret.database,(err)=>{
    if(err){console.error(err)}
    else{console.log("Database connected")}
},{useMongoClient:true})

// prepare is the method of next and wraps all the routes that i have made into single object and then sends it to client.
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


//   Creating first Admin

//   var admin = new Admin();
//       admin.username = "ashishsoni";
//       admin.password = "kumar";

//       admin.save((err,user) => {
//           if(err){console.error("Error: ", err)}
//         //   else{redirect('/admin')}
//       })


//Getting User's name
  server.get('/getuser',(req,res)=>{
      res.json(req.user);
  })


//Renders main Page
  server.get('/main',(req,res)=>{
      app.render(req,res,'/main',req.query);
  })

//User Authentication 
  server.post('/login',passport.authenticate('User',{failureRedirect:'/login'}),(req,res) => {
      res.redirect('/main');
  })

// Admin Authentication 
  server.post('/admin',passport.authenticate('Admin',{failureRedirect:'/admin'}),(req,res) => {
      res.redirect('/addProducts');
  })

//Adding Products 
server.post('/addProducts',(req,res) => {
    var product = new Products();
    product.name = req.body.pname;
    product.brand = req.body.brand;
    product.save((err,product) => {
        if(err){console.error("Error: ", err)}
        else{res.redirect('/addProducts')}
    })
})

// Signing Up 
  server.post('/signup',(req,res) => {
      var user = new User();
      user.username = req.body.username;
      user.password = req.body.password;

      user.save((err,user) => {
          if(err){console.error("Error: ", err)}
          else{res.redirect('/login')}
      })
  })

  // Logging Out
  server.get('/logout',(req,res)=>{
          req.logout();
          res.redirect('/');

  })


//Handling all requests and responses 
  server.get('*', (req, res) => {
    return handle(req, res)
  })


//Listens Port and Catches error
  server.listen(secret.port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})