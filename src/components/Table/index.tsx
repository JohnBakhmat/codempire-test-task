import React from 'react'
import Country from '../../models/Country'
import ListItem from '../ListItem'
import style from './style.module.sass'
interface Props {
  columns: Array<string>
  rows: Array<Country>
}

const Table = (props: Props) => {
  return (
    <table className={style['table']} cellSpacing={50}>
      <thead>
        <tr className={style['head']}>
          <th>№</th>
          <th>Country</th>
          <th>TotalConfirmed</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((element: Country, index: number) => {
          return <ListItem key={element.id} country={element} index={index} />
        })}
      </tbody>
    </table>
  )
}

export default Table
