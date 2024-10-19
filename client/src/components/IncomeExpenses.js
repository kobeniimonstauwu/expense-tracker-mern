import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'


export const IncomeExpenses = () => {
const { transactions } = useContext(GlobalContext)
const amounts = transactions.map(transaction => transaction.amount)

const income = amounts
.filter(item => item > 0)
.reduce((acc, item) => (acc += item), 0)
.toFixed(2);

const expense = (
amounts
.filter(item => item < 0)
.reduce((acc, item) => (acc += item), 0) * -1)
.toFixed(2);

// In income and expense, it filters the data from the amount in transactions
// Then after that, it has a condition while it filters the item based on what the negative is (expense or income)
// Then it adds the total of those separately and has a decimal which is toFixed

  return (
    
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${numberWithCommas(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${numberWithCommas(expense)}</p>
        </div>
      </div>
    
  )
}
