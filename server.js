const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5500;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
/*app.get('/', (req, res) => {
  res.send("Hello World");
});*/

// load welcome page on root route
app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "welcome.html" );  
});

// load index.html to register
app.get('/register', function (req, res) {  
    res.sendFile( __dirname + "/" + "index.html" );  
});

//login handle
app.get('/login',(req,res)=>{
    //res.render('login');
    res.sendFile(  __dirname + "/" + "login.html" );
});


// Require employee routes
const userRoutes = require('./src/routes/user.routes');
// using as middleware
app.use('/users', userRoutes);
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});