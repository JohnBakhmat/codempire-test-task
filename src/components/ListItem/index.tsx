import React from 'react'
import Country from '../../models/Country'
import { useAppDispatch } from '../../store'
import { changeModalData, changeShown } from '../../store/modalStore'
import style from './style.module.sass'
interface Props {
  country: Country
  index: number
}

const ListItem = ({ country, index }: Props) => {
  const dispatch = useAppDispatch()
  const handleSelect = () => {
    dispatch(changeModalData(country))
    dispatch(changeShown())
  }

  return (
    <tr className={style['table-row']} onClick={handleSelect}>
      <td>{index + 1}</td>
      <td>{country.Name}</td>
      <td>{country.TotalConfirmed}</td>
    </tr>
  )
}

export default ListItem
