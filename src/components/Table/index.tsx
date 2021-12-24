import React from 'react'
import ListItem from '../ListItem'
import style from './style.module.sass'
interface Props {}

const Table = (props: Props) => {
  return (
    <table className={style['table']} cellSpacing={50}>
      <thead>
        <ListItem isHeader data={['№', 'Country', 'Total Confirmed']} />
      </thead>
      <tbody>
        <ListItem data={[1, 2, 3]} />
      </tbody>
    </table>
  )
}

export default Table
