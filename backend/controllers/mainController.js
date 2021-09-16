
//=========Controller page===========


const {showUsers} = require('../models/mainModel');

function connect(req,res){
    showUsers(req,res);
}





module.exports = {
 connect
   
};