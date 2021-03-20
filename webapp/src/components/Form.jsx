import React from 'react'
import css from '@emotion/css'
import { arrayOf, node, oneOfType, func } from 'prop-types'

export const Form = ({ onSubmit, children }) => {
  return (
    <form css={formStyles} onSubmit={(evt) => {
      evt.preventDefault()
      onSubmit()
    }}>
      {children}
    </form>
  )
}
Form.propTypes = {
  onSubmit: func,
  children: oneOfType([arrayOf(node), node])
}
const formStyles = css`
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  & > label {
    flex-direction: column;
    display: flex;
    margin: 1rem 0;
  }
  & > label > select {
    min-height: 2.25rem;
  }
  & > label.checkbox {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    & > input {
      min-width: 1.5rem;
    }
  }
  & > .submit {
    align-self: flex-end;
    max-width: 7rem;
    flex: none;
    background-color: #272727;
    color: white;
    border-style: solid;
    border-width: 1px;
    border-radius: 1.5rem;
  }
`
