import React from 'react'
import { arrayOf, string, func, object } from 'prop-types'
import { css } from '@emotion/core'
import { makeDataTestId } from '../common/utils'

export const Table = ({ headers, rows, label, onRowClick }) => {
  return (
    <table css={tableStyles}>
      <thead>
        <tr>
          {headers.map(header =>
            <th css={headerStyles} key={header}>{header}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(rows).map(id => {
            return (
              <tr
                className='row'
                css={rowStyles}
                data-testid={`${label}-${id}`}
                key={`transaction-${id}`}
                onClick={() => onRowClick(id)}
              >
                {rows[id].map((val, idx) =>
                  <td data-testid={makeDataTestId(label, id, headers[idx])} key={headers[idx]}>{String(val || '')}</td>
                )}
              </tr>
            )
          })
        }
      </tbody>
    </table>

  )
}
Table.propTypes = {
  headers: arrayOf(string),
  rows: object,
  label: string,
  onRowClick: func
}

const tableStyles = css`
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
`

const headerStyles = css`
  position: relative;
  font-size: .875rem;
  line-height: 1.375rem;
  font-weight: 500;
  text-align: left;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: uppercase;
  color: rgba(0,0,0,0.3); 
  padding: 0.5rem;
`

const rowStyles = css`
  border-bottom-color: rgba(0,0,0,.12);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  font-size: 0.875rem;
  cursor: pointer;
  & > td {
    padding: 0.5rem;
  }
`
