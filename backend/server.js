const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
 bodyParser = require("body-parser");
 const mysql = require('mysql');
 const {connect} = require('./controllers/mainController');



//=====gives permission to localhost3000 to fetch data from locahost40000=====
app.use(cors({
  origin:"http://localhost:3000",
  credentials:true,
}));

//bodyparser is used to interpet the incoming data from the client to the server (on post request)
app.use(bodyParser.json()); // for parsing application/json


//=========displays json data from the sql database on entry to localhost4000 url=======

app.get('/',function(req, res) {
  connect(req, res);

});


//============handles data from the submitted form =============
app.post('/',function(req, res) {
  res.sendStatus(200);

  var dataReceived = (req.body);
  console.log(dataReceived);

  console.log(dataReceived.fullname);
  console.log(dataReceived.username);
  console.log(dataReceived.password);

});
//==========logging data without bodyparser, with pure nodejs code========


//   app.post('/',(req,res)=>{
//   res.sendStatus(200);
//   // let body = '';
//   //   req.on('data', chunk => {
//   //       body += chunk.toString(); // convert Buffer to string
//   //   });
//   console.log(JSON.parse(req.body));


// //     req.on('end', () => {
// //         console.log(req.body);
// //         res.end('ok');
// //     });
  
//   });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})