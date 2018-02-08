var mongoose = require('mongoose');
var Account = mongoose.model('Account');
var StakeHolder = mongoose.model('StakeHolder');

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
            res.json(err);
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
                 res.json(accounts);
              }
            })
            // res.json(user);
           
           
          }
        });
    }   
    
  },
   login: function(req,res){
     console.log("in login", req.body);
//     UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };
     
      StakeHolder.findOne({email: req.body.email,password: req.body.password})
      .then(user => {
      if(!user){
          res.json(false);
      }
      else{
          req.session.user_id=user._id;
          console.log("current user id is", req.session.user_id);
          res.json(user);
      }
      })
      .catch(err=> {console.log(err);res.json(false)});
   },
//   logged_in_user: function(req,res){
//     console.log("terrific from logged_in_user")
//     console.log(req.session.user_id)
//     if(req.session.user_id){
//       console.log("from logged_in_user")
//       User.findOne({_id: req.session.user_id})
//       .then(user=>{res.json(user)
//         console.log("what am I getting?" ,user)
//       })
//       .catch(err=>console.log(err))
//     }
//     else{
//       console.log("redirecting to home")
//       res.json(false)
//     }
//   },
//   logout: function(req,res){
//     console.log("bye bye, loggin out")
//     req.session.destroy()
//     res.redirect('/')
//   }
};
