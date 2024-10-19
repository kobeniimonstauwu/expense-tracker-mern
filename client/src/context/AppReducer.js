// This is where the Reducer is set up when the useReducer is used
// Reducer is used for specifying state changes according to the dispatch/actions (this is where the state responds to certain actions [dispatch])
// Changes to data, in other words
export default (state, action) =>{
    switch(action.type){
        // It will look through the action type from the dispatch and looks for the values through the case.

        case 'GET_TRANSACTIONS':
            return{
                ...state, //initializes the values in the state such as loading, error, etc.
                loading: false, // it will turn theloading to false for the spinner since it already has fetched the data at this point (there is already an action)
                transactions: action.payload // the data itself
            }
        case 'DELETE_TRANSACTION':
            return{
                ...state, // Current state data
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload) // What we want to do with the current data
                // What we do to the data is to filter it out and loop through the transactions data, and it only filters out 
                // Data that matches the id
            }
           
    
        case 'ADD_TRANSACTION':
            return{
                ...state, //Current state data\
                // transactions: [ action.payload, ...state.transactions ] - this is when you have data in another file, but in the database the structure is opposite
                transactions: [ ...state.transactions, action.payload ]
                // It adds the new transaction to the current transaction, from top to bottom
        }
        
        case 'TRANSACTION_ERROR':
            return{
                ...state,
                error: action.payload
                // The get transactions has loading because it has await function, in fetching the data

            }
        default:
            return state
        }
        
    // Default action
}