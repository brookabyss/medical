var mongoose     = require('mongoose'),
Schema    = mongoose.Schema,
  VisitSchema  = new mongoose.Schema({
    _creator:{ type: Schema.Types.ObjectId, ref: "StakeHolder"},
    provider_name:{
      type: String,
      required:  [true,"Provider( Caregiver, Doctor or Pharmacist's name can't be empty"],
    },
    blood_pressure:{
      type: Number,
      min: [1, ' Blood pressure error reading'],
    },
    heart_rate:{
      type: Number,
      min: [1, ' Heart rate error reading'],
    },
    weight:{
      type: Number,
      min: [0, ' Weight error reading'],
    },
    INR:{
      type: Number,
      min: [0, ' INR error reading'],
    },
    visit_date:{
      type: Date,
    },
    home_test:{
        type: Boolean,
        default: false
    },
    visit_notes:{
        type: String,
    }
    
    },
    { timestamps: true } );


var Visit= mongoose.model('Visit', VisitSchema);