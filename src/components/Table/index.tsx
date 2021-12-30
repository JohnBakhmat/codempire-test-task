import React, { useEffect, useState } from 'react'
import Country from '../../models/Country'
import ListItem from '../ListItem'
import style from './style.module.sass'
import _ from 'lodash'
interface Props {
  columns: Array<string>
  rows: Array<Country>
}
enum SortTypes {
  ASC = 'asc',
  DESC = 'desc',
}
class HeaderCell {
  label: string
  property: string
  constructor(label: string, property: string) {
    this.label = label
    this.property = property
  }
}

const Table = (props: Props) => {
  const getSortArrow = (column: string) => {
    if (column === sortColumn) {
      switch (sortType) {
        case SortTypes.ASC: {
          return (
            <span className={style['arrow']}>
              <i className='fas fa-arrow-up'></i>
            </span>
          )
        }
        case SortTypes.DESC: {
          return (
            <span className={style['arrow']}>
              <i className='fas fa-arrow-down'></i>
            </span>
          )
        }
        default:
          break
      }
    }
  }
  const [rows, setRows] = useState<Array<Country>>(props.rows)

  //TODO: do this with reducer
  const [sortColumn, setSortColumn] = useState('Name')
  const [sortType, setSortType] = useState(SortTypes.ASC)

  useEffect(() => {
    setRows(props.rows)
  }, [props])

  useEffect(() => {
    setRows((): any => _.orderBy(rows, [sortColumn], [sortType]))
  }, [sortColumn, sortType]) // eslint-disable-line react-hooks/exhaustive-deps

  const tableHeader = [
    new HeaderCell('№', 'null'),
    new HeaderCell('Country', 'Name'),
    new HeaderCell('Total Confirmed', 'TotalConfirmed'),
  ]

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortType((prevState) =>
        prevState === SortTypes.ASC ? SortTypes.DESC : SortTypes.ASC
      )
    } else {
      setSortColumn(column)
    }
  }
  return (
    <table className={style['table']} cellSpacing={50}>
      <thead>
        <tr className={style['head']}>
          {tableHeader.map((item, index) => (
            <th key={index} onClick={() => handleSort(item.property)}>
              <span>{item.label}</span>

              {getSortArrow(item.property)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((element: Country, index: number) => {
          return <ListItem key={element.id} country={element} index={index} />
        })}
      </tbody>
    </table>
  )
}

export default Table
