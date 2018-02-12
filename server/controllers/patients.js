var mongoose = require('mongoose');
var Patient = mongoose.model('Patient');
var StakeHolder = mongoose.model('StakeHolder');

module.exports ={
    createPatient: (req,res)=>{
        console.log("create Patient controller");
        let patient= new Patient({ 
            patient_first_name: req.body.first_name, 
            patient_last_name:  req.body.last_name,
            dob: req.body.dob,
            _creator: req.session.user_id
            });
            
            patient.save(
                function(err){
                    if(err){
                        console.log(err);
                        res.status(500).json(err);
                    }
                    else{
                        Patient.find({_creator:req.session.user_id},(err,accounts)=>{
                            if (err){
                                    console.log("empty accounts");
                                    console.log(err);
                                    res.status(500).json(err);
                  
                             }
                            else{
                                 console.log("create patient aruga");
                                 
                                 var context={
                                    accounts: accounts,
                                    user_id: req.session.user_id
                                 };
                    
                            res.json(context);
                    
                              }
                    });
                    }
            });
        
            },
    
    
    
    
    
    
    
}