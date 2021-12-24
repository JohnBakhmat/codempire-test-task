import React from 'react'
import style from './style.module.sass'
interface Props {
  data: Array<string | number>
  isHeader?: Boolean
}

const ListItem = ({ data, isHeader }: Props) => {
  return (
    <tr className={style['table-row']}>
      {data.map((item) => (isHeader ? <th>{item}</th> : <td>{item}</td>))}
    </tr>
  )
}

export default ListItem
