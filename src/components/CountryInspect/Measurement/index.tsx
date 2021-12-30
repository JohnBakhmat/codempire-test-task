import React, { FC } from 'react'
import style from './style.module.sass'
interface Props {
  label: string
  value: number
}

const Measurement: FC<Props> = (props) => {
  return (
    <div className={style['measurement-grid']}>
      <span className={style['icon']}>{props.children}</span>
      <span className={style['label']}>{props.label}</span>
      <span className={style['value']}>{props.value}</span>
    </div>
  )
}

export default Measurement
