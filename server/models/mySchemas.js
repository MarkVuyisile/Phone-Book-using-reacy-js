const mongoose = require('mongoose');

const PhoneBook = mongoose.Schema({
   Firstname:{
      type: String,
      require:true
   },
   
     Number:{
      type: String,
      require:true
   },  
   Email:{
      type: String,
      require:true
   },
    
})
module.exports = mongoose.model('phone_book',PhoneBook)