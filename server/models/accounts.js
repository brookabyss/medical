var mongoose     = require('mongoose'),
  Schema    = mongoose.Schema,
 AccountSchema  = new mongoose.Schema({
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
    hospital_number: {
        type: String,
        required:[true,"Correct answer is empty"]
    },
    medications:[{ type: Schema.Types.ObjectId, ref :'Medication', default: null}],
  },
{ timestamps: true } );


var Account= mongoose.model('Account', AccountSchema);