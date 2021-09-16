
//======Model page=========

const mysql = require('mysql');
//======Database connection=======
function connection(){
   this.con = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database : 'test'
   });
 }

 connection.prototype.greeting= function(){
   console.log('im from prototype');
 }
 


 //======Execute any query function=======

function queryFunc(req,res,sql){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if(err) throw err;
res.end(JSON.stringify(result));
res.end();
    });
  });


}


// var queryFuncNew = new queryFunc();
// queryFuncNew.prototype

function showUsers(req,res){
  console.log(new connection().greeting(),'this is greeting');
  console.log(connection(),'this is connectrion');

  queryFunc(req,res,"SELECT * FROM users");


}




function addUsers(req,res,name,email){
  connection();
  queryFunc(req,res,`INSERT INTO myusers (id, name, email,created_at,updated_at) Values(null,${name},${email},NOW(),NOW())`);


}


module.exports={
  showUsers
 }