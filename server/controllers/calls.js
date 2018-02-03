var mongoose = require('mongoose');
// var User = mongoose.model('User');
// var Question = mongoose.model('Question');

module.exports ={// if errors ,send errors
    call_test: function (req,res){
    
         res.json({"test":"data"});
        
    }
}