'use strict';
const User = require('../models/user.model');

exports.findAll = function(req, res) {
User.findAll(function(err, user) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', user);
  res.send(user);
});
};

exports.create = function(req, res) {
    var new_user={
        'firstname': req.body.User.firstname,
        'lastname': req.body.User.lastname,
        'email': req.body.User.email,
        'username': req.body.User.email,
        'password': req.body.User.password
    }
    console.log('req json-- '+req.body.User.firstname);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required fields' });
    }else{
        User.create(new_user, function(err, user) {
            if (err)
                res.send(err);
            else{
                res.json({error:false,message:"User Registered Successfully!",data:user});
            }
        });
    }
};

exports.findById = function(req, res) {
User.findById(req.params.id, function(err, user) {
  if (err)
  res.send(err);
  res.json(user);
});
};

exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
    User.findById(req.body.email, function (error, users) {
      if (error) {
          res.json({
            status:false,
            message:'Error: '+error
            });
      }else{
        if(users.length >0){
            console.log('users data-'+users);
            console.log('users data-'+users[0]);
            var user = JSON.parse(JSON.stringify(users[0]));
            console.log(''+user.password+', db-'+user.email);
            if(password==user.password){
                res.json({
                    status:true,
                    message:'successfully authenticated',
                    data: user
                });
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match",
                  data: user
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
              message:"Email does not exist."
          });
        }
      }
    });
}

exports.register=function(req,res){
    console.log('start register--'+req.body.email);
    var user={
        'firstname': req.body.firstname,
        'lastname': req.body.lastname,
        'email': req.body.email,
        'password': req.body.password
    }

    User.create(user, function (error, results) {
            if (error) {
                res.json({
                    status: false,
                    message: 'Error: '+error
                });
            } else {
                res.json({
                    status: true,
                    data: results,
                    message: 'User Registered Sucessfully'
                });
            }
        });

    console.log('end register--'+req.body.email);
}

