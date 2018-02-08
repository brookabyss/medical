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
        index: { unique: true }
      },
    password:{
      type: String,
      required:  [true,'Password is empty'],
    },
    accounts:[{ type: Schema.Types.ObjectId, ref :'Account', default: null}],

    },
    { timestamps: true } );

StakeHolderSchema.pre('save', function(done){
  if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(this.password)){
    console.log("password matcher error");
     
  }
bcrypt.hash(this.password, 10 , function(err, hash) {
  if(err){
    console.log("Brook Error");
    console.log(err);
  }
  console.log(this.password);
  this.password=hash;
  console.log(this.password);
});
done();
});
 


var StakeHolder= mongoose.model('StakeHolder', StakeHolderSchema);