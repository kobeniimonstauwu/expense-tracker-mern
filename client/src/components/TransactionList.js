import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
// To use global context, we'll need useContext to initialize it
// const context = useContext(GlobalContext) // This will directly get the data
// console.log(context) //Data from state will be shown in console.log

//Better version:
const { transactions, getTransactions } = useContext(GlobalContext) // This descructured variable (array) can now be looped through

useEffect(() => {
  getTransactions()
  //Updates the data from the existing state (the api and the mongo db keys have the same naming convention as the old data file) 
  //In order to disable the warning in the console, type this:
  //eslint-disable-next-line react-hooks/exhaustive-deps
}, [] //Empty array here will prevent an infinite loop from happening, the error mentioned above is caused by this empty array but if we don't put it, it will cause an infi-loop 
)
  return (
    <>
    <h3>History</h3>
      <ul className="list">
        { transactions.map(transaction => (<Transaction key = { transaction._id } transaction = { transaction }/>))}
        {/* The transaction is passed as a prop in order to pass the data of the looped data to the Transaction.js */}
        {/* Each list is looped throughout the transactions, where the text and amount keys are used to show the data for each that is looped */}
        
      
      </ul>
      </>
  )
}
