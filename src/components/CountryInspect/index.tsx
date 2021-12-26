import { isNull } from 'lodash'
import React from 'react'
import Country from '../../models/Country'
import Measurement from './Measurement'
import style from './style.module.sass'
import { ReactComponent as ConfirmedSVG } from '../../assets/icons/CofirmedIcon.svg'
import { ReactComponent as RecoveredSVG } from '../../assets/icons/RecoveredIcon.svg'
import { ReactComponent as DeathSVG } from '../../assets/icons/DeathIcon.svg'

interface Props {
  country: Country | null
}

const CountryInspect = (props: Props) => {
  return (
    <>
      <div className={style['root']}>
        {isNull(props.country) ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1 className={style['title']}>{props.country.Name}</h1>

            <Measurement
              label='Total Confirmed'
              value={props.country.TotalConfirmed}
            >
              <ConfirmedSVG width={20} />
            </Measurement>

            <Measurement label='Total Deaths' value={props.country.TotalDeaths}>
              <DeathSVG width={20} />
            </Measurement>

            <Measurement
              label='Total Recovered'
              value={props.country.TotalRecoverd}
            >
              <RecoveredSVG width={15} />
            </Measurement>
          </>
        )}
      </div>
    </>
  )
}

export default CountryInspect
