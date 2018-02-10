var mongoose     = require('mongoose'),
// validate = require('mongoose-validator'),
// bcrypt = require('bcrypt-as-promised'),
bcrypt = require('bcrypt'),
Schema    = mongoose.Schema,
StakeHolderSchema  = new mongoose.Schema({
    first_name:{
      type: String,
      required:  [true,'First Name required'],
    },
    last_name:{
      type: String,
      required:  [true,'Last Name required'],
    },
   
    email: {
        type: String,
         required:  [true,'Email is required'],
         validate: {
          validator: function(value) {
             return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(value);
          },
          message: '{VALUE} is not a valid email!'
        },
        validate: {
            isAsync: true,
            validator: function(value, isValid) {
                const self = this;
                return self.constructor.findOne({ email: value })
                .exec(function(err, user){
                    if(err){
                        throw err;
                    }
                    else if(user) {
                        if(self.id === user.id) {  // if finding and saving then it's valid even for existing email
                            return isValid(true);
                        }
                        return isValid(false);  
                    }
                    else{
                        return isValid(true);
                    }

                });
            },
            message:  'The email address is already taken!'
      },
    },
    password:{
      type: String,
      required:  [true,'Password is empty'],
      validate: {
          validator: function(value) {
              var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
              return re.test(this.password);
          },
          message: 'A password must be between 8-32 characters , include numbers, alphabets and special characters'
      } 
    },
    accounts:[{ type: Schema.Types.ObjectId, ref :'Account', default: null}],

    },
    { timestamps: true } );

StakeHolderSchema.pre('save',true, function(next,done){
    var user=this;
    bcrypt.hash(this.password, 10 , function(err, hash) {
      if(err){
        console.log("Brook Error");
        console.log(err);
      }
       console.log("Are we still here??????????????");
        console.log(this.password);
        user.password=hash;
        console.log("Are we still here");
        console.log(user.password);
        next();
      });
      done();
});
 


var StakeHolder= mongoose.model('StakeHolder', StakeHolderSchema);