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
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});


// //POST route from contact form
app.post('/contact', urlencodedParser, function (req, res) {
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
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: 'ruthny16@gmail.com',
        subject: 'New message from contact form at Ruth.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
      };
      smtpTrans.sendMail(mailOpts, function (error, response) {
        if (error) {
          res.render('Email could not be sent due to' +' '+ error);
          // console.log('Try sending your message again');
        }
        else {
          res.render('Email was sent successfully');  
          // console.log('Try sending your message again');
        }
      });
    });

    app.listen(PORT, function() {
      console.log('app listening on port' + ' ' + PORT)
    });

    // app.listen(port);