const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactionsControllers') // Will import the specific arrow function from the controller file

const express = require('express')
const router = express.Router()

router.route('/').get(getTransactions).post(addTransaction)
// The route is the route that's hit from the server (/api/v1/transactions), and the method get will run the function where the HTTP request is, and executes that HTTP request
// Since the route is the same for add, we'll just need to add another method to the route

router.route('/:id').delete(deleteTransaction)
//Needs the id in the route which is a number type
module.exports = router