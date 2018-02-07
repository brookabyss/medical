var mongoose     = require('mongoose'),
  Schema    = mongoose.Schema,
  StakeHolderSchema  = new mongoose.Schema({
    first_name:{
      type: String,
      required:  [true,'First Name is empty'],
    },
    last_name:{
      type: String,
      required:  [true,'Last Name is empty'],
    },
   
    email: {
        type: String,
         required:  [true,'Email is empty'],
      },
    password:{
      type: String,
      required:  [true,'Password is empty'],
    },
    accounts:[{ type: Schema.Types.ObjectId, ref :'Account', default: null}],

    },
    { timestamps: true } );


var StakeHolder= mongoose.model('StakeHolder', StakeHolderSchema);