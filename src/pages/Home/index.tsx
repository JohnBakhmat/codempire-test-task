import React, { useEffect, useReducer, useState } from 'react'
import CovidLogo from '../../assets/logo.png'
import Search from '../../components/Search'
import Table from '../../components/Table'
import Country from '../../models/Country'
import { getSummary } from '../../services/api'
import style from './style.module.sass'
interface Props {}

const HomePage = (props: Props) => {
  //TODO: useReducer is better for large data
  const [summary, setSummary] = useState<Array<Country>>([])
  const tableColumns = ['№', 'Country', 'Total Confirmed']
  useEffect(() => {
    getSummary((countries: Array<Object>) => {
      setSummary(
        countries.map((country: any) => {
          return new Country(
            country.Country,
            country.TotalConfirmed,
            country.TotalDeaths,
            country.TotalRecovered
          )
        })
      )
    })
  }, [])
  const tableColumns = ['№', 'Country', 'Total Confirmed']
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
  }
  return (
    <div className={style['root']}>
      <header className={style['header']}>
        <div className={style['covid-group']}>
          <img
            className={style['covid-logo']}
            src={CovidLogo}
            alt='COVID logo'
          />
          <h1 className={style['covid-title']}>Statistic</h1>
        </div>
        <Search placeholder='Search...' onChange={handleSearchChange} />
      </header>
      <div>
        <Table columns={tableColumns} rows={summary} />
      </div>
    </div>
  )
}

export default HomePage
