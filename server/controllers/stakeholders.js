var mongoose = require('mongoose');
var Account = mongoose.model('Account');
var StakeHolder = mongoose.model('StakeHolder');
var bcrypt = require('bcrypt');

module.exports ={// if errors ,send errors
  
  register: function(req,res){
    console.log("register function",req.body);
    if(req.body.password!=req.body.confirm_password){
      console.log("passwords don't match")
        res.status(500).json(false);
    }
    else{
        let user= new StakeHolder({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email,password:req.body.password  });
        user.save(
          function(err){
          if (err){
            console.log("Inside register error",err);
            res.status(500).json(err);
          }
          else{
            req.session.user_id=user._id;
            console.log("From registration the currrent user is ", req.session.user_id);
            Account.find({_creator:user._id},(err,accounts)=>{
              if (err){
                console.log("empty accounts");
                console.log(err);
              }
              else{
                console.log("booogies boogies");
                console.log(accounts);
                res.json(accounts);
              }
            });
           
           
          }
        });
    }   
    
  },
   login: function(req,res){
     console.log("in login", req.body);
     var clean= false;
      StakeHolder.findOne({email: req.body.email}, (err,user)=>{
         if(err){
            console.log("login no user")
            console.log(err);
            res.json(false);
          }
        else{
          console.log("there is a user")
          bcrypt.compare(req.body.password,user.password, function(err, result) {
            console.log("Check passwords" +result);
            if(!result){
              console.log("No password result"+err);
              res.status(500).json(err);
            }
            else{
              Account.find({_creator:user._id},(err,accounts)=>{
                 if (err){
                   console.log("empty accounts");
                   console.log(err);
                   res.status(500).json(err);
                  
                  }
                  else{
                     console.log("login aruga");
                     console.log(accounts);
                     res.json(accounts);
                  }
                
                
              });
            }
            
          });

        }
        
        });   
      

   },

};
