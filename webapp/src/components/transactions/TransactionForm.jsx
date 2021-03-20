import React, { useEffect, useState } from 'react'
import { Input } from '../Input'
import { arrayOf, func } from 'prop-types'
import { MerchantT, TransactionT, UserT } from '../../common/propType'
import { Form } from '../Form'

const fieldTypeMap = {
  description: 'text',
  amount: 'number',
  userId: 'select',
  merchantId: 'select',
  debit: 'checkbox',
  credit: 'checkbox'
}

const defaultInput = {
  description: '',
  amount: 0,
  userId: '',
  merchantId: '',
  debit: false,
  credit: false
}

export const TransactionForm = ({ onSubmit, transaction, users, merchants }) => {
  const [input, setInput] = useState({
    description: transaction?.description || '',
    amount: transaction?.amount || 0,
    userId: transaction?.['userId'] || '',
    merchantId: transaction?.['merchantId'] || '',
    debit: transaction?.debit || false,
    credit: transaction?.credit || false
  })
  const options = {
    userId: users,
    merchantId: merchants
  }
  useEffect(() => {
    setInput(transaction || defaultInput)
  }, [transaction])

  return (
    <>
      <Form onSubmit={() => {
        onSubmit(input)
        !transaction && setInput(defaultInput)
      }}>
        {Object.keys(fieldTypeMap).map(key => {
          const fieldType = fieldTypeMap[key]
          return (
            <label className={fieldType} htmlFor={key} key={key}>
              {key}
              {fieldType === 'select' && !transaction ? (
                <select id={key} name={key} onBlur={evt => setInput({ ...input, [key]: evt.currentTarget.value })}>
                  <option>--Select--</option>
                  {(options[key] || []).map(opt => {
                    const label = opt?.name || `${opt.firstName} ${opt.lastName}`
                    return (
                      <option key={opt.id} value={opt.id}>{label}</option>
                    )
                  }
                  )}
                </select>
              ) : (
                <Input
                  checked={fieldType === 'checkbox' ? Boolean(input[key]) : undefined}
                  id={key}
                  key={key}
                  name={key}
                  onChange={evt => setInput({ ...input, [key]: evt.currentTarget.value })}
                  type={fieldType}
                  value={input[key]}
                />
              )}
            </label>
          )
        })}
        <Input className='submit' type='submit' value={transaction?.id ? 'Update' : 'Create'} />
      </Form>
    </>
  )
}
TransactionForm.propTypes = {
  onSubmit: func,
  transaction: TransactionT,
  users: arrayOf(UserT),
  merchants: arrayOf(MerchantT)
}
