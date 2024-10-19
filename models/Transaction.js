const mongoose = require('mongoose')

//Creating Schema for the models
const TransactionSchema = new mongoose.Schema({
    //Fields
    text:{
        //This initiliaze the types of the field
        type: String,
        trim: true, //Removes white spaces in strings
        required: [true, 'Please add some text']
    },
    amount:{
        type: Number,
        required: [true, 'Please add the proper value']
    },
    createdAt:{
        type: Date,
        default: Date.now // It will have a default value once it recognizes no assigned value once it is created
    }
    
})

module.exports = mongoose.model('Transaction', TransactionSchema)

// The Schema is used to created a model called Transaction