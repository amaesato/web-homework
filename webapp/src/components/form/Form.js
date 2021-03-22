import styled from '@emotion/styled'

export const Form = styled.form`
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  & > label {
    flex-direction: column;
    display: flex;
    margin: 1rem 0;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.38rem;
  }
  & > label.checkbox {
    align-items: center;
    flex-direction: row;
    margin: 1rem 0;
  }
  & > label.checkbox + label.checkbox {
    margin-top: 0rem;
  }
  & > label > input[type='checkbox'] {
    margin: 0 0.5rem 0 0;
    min-height: 1.25rem;
  }
  & > label > select {
    min-height: 2.25rem;
    padding: 0.5rem;
  }
`
