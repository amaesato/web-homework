import { getEmployeeFullName, getUserHeadersAndRows } from './user-utils'
import { users } from '../../mocks/users-data'

describe('getEmployeeFullName', () => {
  it('should return empty string if user is undefined', () => {
    expect(getEmployeeFullName(undefined)).toEqual('')
  })
  it('should return the full name of the user', () => {
    expect(getEmployeeFullName(users[1])).toEqual('Jane2 Doe2')
  })
})

describe('getUserHeadersAndRows', () => {
  const headers = ['name', 'dob', 'transactions count']
  it('should return empty string if user is undefined', () => {
    expect(getUserHeadersAndRows([])).toEqual([headers, {}])
  })
  it('should return the full name of the user', () => {
    expect(getUserHeadersAndRows(users)).toEqual([headers, {
      'employee4': ['Jane Doe', '5/6/1979', 0],
      'employee2': ['Jane2 Doe2', '5/6/1979', 0]
    }])
  })
})
