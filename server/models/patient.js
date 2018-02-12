var mongoose     = require('mongoose'),
// validate = require('mongoose-validator'),
Schema    = mongoose.Schema,
 PatientSchema  = new mongoose.Schema({
    _creator:{ type: Schema.Types.ObjectId, ref: "StakeHolder"},
    patient_first_name: {
        type: String,
        required:[true,"Patient first name can't be empty"],
        minlength: [1, "The question has to be at least 1 characters in length."]
    },
    patient_last_name: {
        type: String,
        required:[true,"Patient last name can't be empty"],
        minlength: [1, "The question has to be at least 1 characters in length."]
    },
    dob: {
        type: Date,
        required:[true,"Date of birth can't be empty"],
    },
    
    hospital_Id: {
        type: String,
    },
    medications:[{ type: Schema.Types.ObjectId, ref :'Medication', default: null}],
    hospital_visits:[{ type: Schema.Types.ObjectId, ref :'Visit', default: null}],
  },
{ timestamps: true } );


var Patient= mongoose.model('Patient', PatientSchema);