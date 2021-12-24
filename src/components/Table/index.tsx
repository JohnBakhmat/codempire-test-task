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
        <ListItem key={'header'} isHeader data={props.columns} />
      </thead>
      <tbody>
        {props.rows.map((element: Country, index: number) => {
          return (
            <ListItem
              key={element.id}
              data={[index + 1, element.Name, element.TotalConfirmed]}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
