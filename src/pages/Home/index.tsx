import { ChangeEvent, FC, useEffect, useReducer, useState } from 'react'
import CovidLogo from '../../assets/logo.png'
import Search from '../../components/Search'
import Table from '../../components/Table'
import Country from '../../models/Country'
import { getSummary } from '../../services/api'
import style from './style.module.sass'
import * as _ from 'lodash'
import Modal from '../../components/Modal'

import {
  changeModalShown,
  selectData,
  selectIsShow,
} from '../../store/modalStore'
import { useAppDispatch, useAppSelector } from '../../store'
import CountryInspect from '../../components/CountryInspect'
interface Props {}
type CountryEnumerable = Array<Country>
enum SumaryActionType {
  Search,
  Sort,
  Fetch,
}
class SumaryAction {
  type: SumaryActionType
  payload: CountryEnumerable | string

  constructor(type: SumaryActionType, payload: CountryEnumerable | string) {
    this.type = type
    this.payload = payload
  }
}

const HomePage: FC<Props> = (props) => {
  const isModalOpen = useAppSelector(selectIsShow)
  const modalData = useAppSelector(selectData)
  const appDispatch = useAppDispatch()

  const handleModalClose = () => {
    appDispatch(changeModalShown())
  }
  const [summaryImmutable, setSummaryImmutable] = useState<CountryEnumerable>()

  const summaryReducer = (
    state: Array<Country>,
    action: SumaryAction
  ): CountryEnumerable => {
    switch (action.type) {
      case SumaryActionType.Fetch: {
        const data = action.payload as CountryEnumerable
        setSummaryImmutable(data)
        return data
      }
      case SumaryActionType.Search: {
        return _.filter(summaryImmutable, (country) =>
          country.Name.toLowerCase().includes(
            (action.payload as string).toLowerCase()
          )
        )
      }
      case SumaryActionType.Sort: {
        //TODO: Sort
        return state
      }
      default:
        return state
    }
  }
  //TODO: useReducer is better for large data
  const [summary, dispatch] = useReducer(summaryReducer, new Array<Country>())
  useEffect(() => {
    getSummary((countries: Array<Object>) => {
      let convertedData = countries.map(
        (country: any) =>
          new Country(
            country.CountryCode,
            country.Country,
            country.TotalConfirmed,
            country.TotalDeaths,
            country.TotalRecovered
          )
      )
      let action = new SumaryAction(SumaryActionType.Fetch, convertedData)
      dispatch(action)
    })
  }, [])
  const tableColumns = ['№', 'Country', 'Total Confirmed']
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    dispatch(new SumaryAction(SumaryActionType.Search, value))
  }
  return (
    <>
      {isModalOpen ? (
        <Modal onModalClose={handleModalClose}>
          <CountryInspect country={modalData} />
        </Modal>
      ) : null}
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
    </>
  )
}

export default HomePage
