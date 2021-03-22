import styled from '@emotion/styled'

export const Input = styled.input`
  min-height: 2rem;
  min-width: 5rem;
  font-size: 0.75rem;
  &[type='checkbox'] {
    min-width: 1.5rem;
  }
  &[type='submit'] {
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
