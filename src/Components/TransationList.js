import React from 'react'
import { GlobalContext } from '../context/Globalstate'
import { useContext } from 'react'
import Transaction from './Transaction'

const TransationList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (

          <Transaction
            key={transaction.id}
            transaction={transaction}
          />

        ))}
      </ul>

    </div>
  )
}

export default TransationList
