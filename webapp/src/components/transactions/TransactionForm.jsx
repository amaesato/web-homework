import React, { useEffect, useState } from 'react'
import { arrayOf, func, string } from 'prop-types'
import { MerchantT, TransactionT, UserT } from '../../common/propType'
import { parseValue } from '../../common/utils'
import { Form, Input } from '../form'

const inputDefinitions = {
  date: 'date',
  description: 'text',
  amount: 'number'
}

const defaultInput = {
  date: '',
  description: '',
  amount: '',
  userId: '',
  merchantId: '',
  debit: false,
  credit: false
}

export const TransactionForm = ({ onSubmit, transaction, users, merchants, activeId }) => {
  const [fieldInputs, setFieldInput] = useState(defaultInput)
  const [debitOrCredit, setDebitOrCredit] = useState()
  const onInputChange = (evt) => {
    setFieldInput({ ...fieldInputs, [evt.currentTarget.name]: evt.currentTarget.value })
  }

  const onTransactionSubmit = () => {
    onSubmit({
      id: transaction?.id,
      date: fieldInputs?.date,
      description: fieldInputs?.description,
      amount: parseValue(fieldInputs?.amount),
      credit: debitOrCredit === 'credit',
      debit: debitOrCredit === 'debit',
      userId: fieldInputs?.userId,
      merchantId: fieldInputs?.merchantId
    })
    setFieldInput(defaultInput)
  }

  const renderDefaultOption = !activeId && <option>-- Select --</option>

  useEffect(() => {
    setFieldInput(transaction ? {
      date: transaction?.date || '',
      description: transaction?.description || '',
      amount: transaction?.amount || 0,
      debit: transaction?.debit || false,
      credit: transaction?.credit || false,
      userId: transaction?.user?.id,
      merchantId: transaction?.merchant?.id
    } : defaultInput)
  }, [transaction])

  return (
    <>
      <Form onSubmit={(e) => {
        e.preventDefault()
        onTransactionSubmit()
      }}>
        {Object.keys(inputDefinitions).map(key => {
          const type = inputDefinitions[key]
          const label = type !== 'checkbox' && key
          return (
            <label className={type} htmlFor={key} key={key}>
              {label}
              <Input
                id={key}
                key={key}
                name={key}
                onChange={evt => onInputChange(evt)}
                placeholder={type === 'number' ? '0.00' : undefined}
                required
                type={type}
                value={fieldInputs[key]}
              />
            </label>
          )
        })}
        <label className='checkbox' htmlFor='credit'>
          <Input
            checked={fieldInputs?.credit || debitOrCredit === 'credit'}
            id='credit'
            name='credit'
            onChange={(evt) => setDebitOrCredit(evt.currentTarget.name)}
            type='checkbox'
            value={debitOrCredit === 'credit'}
          />
            Credit
        </label>
        <label className='checkbox' htmlFor='debit'>
          <Input
            checked={fieldInputs?.debit || debitOrCredit === 'debit'}
            id='debit'
            name='debit'
            onChange={(evt) => setDebitOrCredit(evt.currentTarget.name)}
            type='checkbox'
            value={debitOrCredit === 'debit'}
          />
            Debit
        </label>
        {(transaction || !activeId) && (
        <>
          <label htmlFor='userId'>
          Employee
            <select
              defaultValue={transaction?.user?.id}
              id='userId'
              name='userId'
              onBlur={evt => onInputChange(evt)}
              required
            >
              {renderDefaultOption}
              {(users || []).map(user => {
                const name = `${user?.firstName} ${user?.lastName}`
                return <option key={user?.id} name={name} value={user?.id}>{name}</option>
              })}
            </select>
          </label>
          <label htmlFor='merchantId'>
          Merchant
            <select
              defaultValue={transaction?.merchant?.id}
              id='merchantId'
              name='merchantId'
              onBlur={evt => onInputChange(evt)}
              required
            >
              {renderDefaultOption}
              {(merchants || []).map(merchant => {
                const name = merchant.name
                return <option key={merchant?.id} name={name} value={merchant?.id}>{name}</option>
              })}
            </select>

          </label>
        </>
        )}
        <Input className='submit' type='submit' value={transaction?.id ? 'Update' : 'Add'} />
      </Form>
    </>
  )
}
TransactionForm.propTypes = {
  onSubmit: func,
  transaction: TransactionT,
  users: arrayOf(UserT),
  merchants: arrayOf(MerchantT),
  activeId: string
}
