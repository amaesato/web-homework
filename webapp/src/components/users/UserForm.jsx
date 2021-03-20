import React, { useState } from 'react'
import { Input } from '../Input'
import { func } from 'prop-types'
import { UserT } from '../../common/propType'
import { Form } from '../Form'

const fieldTypeMap = {
  firstName: 'text',
  lastName: 'text',
  dob: 'date'
}

export const UserForm = ({ onSubmit, user }) => {
  const [input, setInput] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    dob: user?.dob || ''
  })
  return (
    <>
      <Form onSubmit={() => onSubmit(input)}>
        {Object.keys(fieldTypeMap).map(key => {
          const fieldType = fieldTypeMap[key]
          return (
            <label className={fieldType} htmlFor={key} key={key}>
              {key}
              <Input
                id={key}
                key={key}
                name={key}
                onChange={evt => setInput({ ...input, [key]: evt.currentTarget.value })}
                type={fieldType}
                value={input[key]}
              />
            </label>
          )
        })}
        <Input className='submit' type='submit' value={user?.id ? 'Update' : 'Create'} />
      </Form>
    </>
  )
}
UserForm.propTypes = {
  onSubmit: func,
  user: UserT
}
