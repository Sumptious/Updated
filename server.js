require('dotenv').config();
var express= require('express');
var app = express();
var nodemailer = require ('nodemailer');
var path = require ('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
var sessionStore = new session.MemoryStore;

var bodyParser = require ('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var middlewares = [
  bodyParser.urlencoded({extended: false})
];
var PORT = process.env.PORT || 3000;

app.use(express.static (path.join(__dirname + '/public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: process.env.value
}));
app.use(flash());

app.get('/', function (req, res) {
  res.render('index');
});



// //POST route from contact form
app.post('/send', urlencodedParser, function (req, res) {
  
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MY_NAME
           
        }
    });

    mailOpts = {
        from: 'sumptious.herokuapp.com',
        to: process.env.MY_NAME,
        subject: 'New message from Contact',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
      };
      smtpTrans.sendMail(mailOpts, function (error, req, res) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email was sent successfully');
        }
      });
      console.log(req.body);
      req.flash('success', 'Thanks for the message! I\'ll be in touch' );
      req.flash('error', 'Message not sent!' );
      res.redirect('/');
    
    });

    app.listen(PORT, function() {
      console.log('app listening on port' + ' ' + PORT)
    });
