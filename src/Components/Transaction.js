import React from 'react'
import { GlobalContext } from '../context/Globalstate';
import { useContext } from 'react';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = (transaction.amount < 0) ? '-' : '+';

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
      </li>
    </div>
  )
}

export default Transaction
