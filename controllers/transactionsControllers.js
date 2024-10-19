const Transaction = require('../models/Transaction')
// Since the mongoose, along with the model is imported here, we'll be able to use queries as well such as - find, delete, etc.

//NOTE: IF THE CONTROLLER METHODS ARE CONNECTED TO THE DATABASE, IT'S FUNCTIONS SHOULD BE USING ASYNC AND AWAIT

//@desc Gets all the transactions
//@route GET REQUEST | Route to hit - /api/v1/transactions
//@access Public (Access)
exports.getTransactions = async(req, res, next) => {
    try{
        const transactions = await Transaction.find()

        return res.status(200).json({
            success: true,
            count: transactions.length, // the amount of data looped through in the array
            data: transactions // The data that is found from the Transaction model
        })
        // Json is the actual response when HTTP Request is executed, and status returns a 200 status which means it was successful in connecting
        
    }
    catch(err){
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

//Data already in the page

//@desc Adds a transaction
//@route POST REQUEST | Route to hit - /api/v1/transactions
//@access Public (Access)
exports.addTransaction = async(req, res, next) => {
    try{
        const { text, amount } = req.body // This will be stored in the these variables and data will be sent through req.body

        const transaction = await Transaction.create(req.body) // Whatever's type in req.body will create the data, the appropriate keys should be the same as the Transaction model's schema(text, amount)
    
        // 201 means the action was successful
        return res.status(201).json({
            success: true, 
            data: transaction
        })
    }
    catch(err){
        // if the name of the error is a validation error due to user input error, it will do this action
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message)
            // It will map through error object from err.errors specifically, and map through it and looping through val.message in val. So basically all the errors the user made
            // will appear here. 

            res.status(400).json({
                success: false,
                error: messages // displays the message of the variable created
            }) //400 is user error
        } 
        // IF another error, it will display a server error
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
}

//The text and amount will be used as a state to create a brand new transaction


// This will post/add a transaction to an existing route where there is data

//@desc Deletes a transaction
//@route DELETE REQUEST | Route to hit - /api/v1/transactions/:id
//@access Public (Access)
exports.deleteTransaction = async(req, res, next) => {
    try{
    const transaction = await Transaction.findById(req.params.id) // This will find the id i the url/route

    if(!transaction){
        return res.status(404).json({
            success:false, 
            error: 'No Transaction Found'
        })
    }

    await transaction.deleteOne() // Formerly known as "remove()"

    return res.status(200).json({
        success: true, 
        data: {}

        // Since the data is already removed, we cannot show it unless you put it in a temporary 
    })
}
    catch(err){
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
    }

}
// It needs an ID to specify what data is being deleted, and the database will be able to get that id based on the id on the route, the route will be setted up through a method later on


