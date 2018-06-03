require('dotenv').config();
var express= require('express');
var app = express();
var nodemailer = require ('nodemailer');
var path = require ('path');

var bodyParser = require ('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var middlewares = [
  bodyParser.urlencoded({extended: false})
];
var PORT = process.env.PORT || 3000;

app.use(express.static (path.join(__dirname + '/public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});


// //POST route from contact form
app.post('/send', urlencodedParser, function (req, res) {
  console.log(req.body);
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MY_NAME,
            pass: process.env.Settings
        }
    });

    mailOpts = {
        from: 'sumptious.herokuapp.com',
        to: process.env.MY_NAME,
        subject: 'New message from Contact',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
      };
      smtpTrans.sendMail(mailOpts, function (error, response) {
        if (error) {
          res.render('contact-failure');
          console.log(error) 
        } else {
          res.render('contact-success');
          console.log('Email was sent successfully');
        }
      });
    });

    app.listen(PORT, function() {
      console.log('app listening on port' + ' ' + PORT)
    });
