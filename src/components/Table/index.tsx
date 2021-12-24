import React from 'react'
import style from './style.module.sass'
interface Props {}

const Table = (props: Props) => {
  return (
    <table className={style['table']}>
      <thead>
        <tr>
          <th>№</th>
          <th>Country</th>
          <th>Total Confirmed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Albania</td>
          <td>6625</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
