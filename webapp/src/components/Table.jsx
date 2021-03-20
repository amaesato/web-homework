import React from 'react'
import { arrayOf, string, bool, number, oneOfType, func } from 'prop-types'
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
          rows.map(row => {
            const rowId = row[0]
            return (
              <tr
                className='row'
                css={rowStyles}
                data-testid={`${label}-${rowId}`}
                key={`transaction-${rowId}`}
                onClick={() => onRowClick(rowId)}
              >
                {row.map((val, idx) =>
                  <td data-testid={makeDataTestId(label, rowId, headers[idx])} key={headers[idx]}>{String(val)}</td>
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
  rows: arrayOf(arrayOf(oneOfType([string, bool, number]))),
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
  color: rgba(0,0,0,0.5); 
  padding: 0.5rem;
`

const rowStyles = css`
  border-bottom-color: rgba(0,0,0,.12);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  cursor: pointer;
  & > td {
    padding: 0.5rem;
  }
`
