
//======Model page=========
const mysql = require('mysql');
//======Database connection=======


function connection(){
this.con= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'test'
  }) 

};


 //======Execute any query function=======

var queryFunc = function(req,res,sql){
  connection.call(this);

  //=======TESTING========
  //   this.req = req;
  // this.res= res;
  // this.sql = sql;
  // this.makeConnection=function(req,res,sql){

  //   console.log('this is makeconnection inside of queryFunc');
  //   console.log(this.con,'this is my con');
  // }

  //====================

  //====Dev code========
  this.req = req;
  this.res= res;
  this.sql = sql;
  this.makeConnection=function(req,res,sql){
    const theConObject = this.con;
    this.con.connect(function(err) {
    if (err) console.log(err);
    console.log("Connected!");
    theConObject.query(sql, function (err, result) {
      if(err) throw err;
res.end(JSON.stringify(result));
res.end();
    });
  });

  }
}

//=====inheritance of objects =======
queryFunc.prototype=Object.create(connection);
const connectionObject = new connection();
const queryFuncObject = new queryFunc();


const showUsers=function(req,res){

  queryFuncObject.makeConnection(req,res,"SELECT * FROM users");


}


function addUsers(req,res,name,email){
  // queryFunc(req,res,`INSERT INTO myusers (id, name, email,created_at,updated_at) Values(null,${name},${email},NOW(),NOW())`);
  queryFuncObject.makeConnection(req,res,`INSERT INTO myusers (id, name, email,created_at,updated_at) Values(null,${name},${email},NOW(),NOW())`);


}


module.exports={
  showUsers
 }