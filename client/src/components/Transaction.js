import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'

export const Transaction = ({transaction}) => {
const { deleteTransaction } = useContext(GlobalContext)

const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <li className= {transaction.amount < 0 ? 'minus' : 'plus' }> 
    {/* // We are making it dynamic where it has a ternary condition, based on the amount
    // Which will change the class from the css */}
{ transaction.text } <span> { sign } ${ numberWithCommas(Math.abs(transaction.amount)) } </span><button onClick = {() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
</li> 
  )
}

