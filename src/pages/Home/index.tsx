import React from 'react'
import CovidLogo from '../../assets/logo.png'
import Search from '../../components/Search'
import Table from '../../components/Table'
import style from './style.module.sass'
interface Props {}

const HomePage = (props: Props) => {
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
        <Search placeholder='Search...' />
      </header>
      <div>
        <Table />
      </div>
    </div>
  )
}

export default HomePage
