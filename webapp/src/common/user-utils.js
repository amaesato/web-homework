import { UserT } from './propType'
import { arrayOf } from 'prop-types'

export const getEmployeeFullName = (user) => {
  if (!user) return ''
  return `${user?.firstName} ${user?.lastName}`
}

export const getUserHeadersAndRows = (users = []) => {
  const headers = ['name', 'dob', 'transactions count']
  const rows = users.reduce((acc, u) => {
    const row = {
      name: getEmployeeFullName(u),
      dob: u?.dob,
      'transactions count': (u?.transactions || []).length
    }
    acc[u.id] = headers.map(h => row[h])
    return acc
  }, {})
  return [headers, rows]
}
getUserHeadersAndRows.propTypes = arrayOf(UserT)
