var mongoose     = require('mongoose'),
  Schema    = mongoose.Schema,
  MedicationSchema  = new mongoose.Schema({
    _creator:{ type: Schema.Types.ObjectId, ref: "StakeHolder"},  
    name:{
      type: String,
      required:  [true,'medication name is empty'],
    },
    expiration:{
      type: Date,
      required:  [true,'expiration is empty'],
    },
    count:{
        type:Number,
        required:[true,'Count needs to be a number'],
        min: [0, ' medication count has to be greater or equal to 0'],
    }
    },
    { timestamps: true } );


var Medication= mongoose.model('Medication', MedicationSchema);