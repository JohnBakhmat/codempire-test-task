import React from 'react'
import Country from '../../models/Country'
import style from './style.module.sass'
interface Props {
  country: Country
}

const CountryInspect = (props: Props) => {
  return (
    <div className={style['root']}>
      <h1>{props.country.Name}</h1>
    </div>
  )
}

export default CountryInspect
