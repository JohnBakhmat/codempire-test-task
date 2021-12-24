import React, { ChangeEventHandler } from 'react'
import style from './style.module.sass'
interface Props {
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Search = (props: Props) => {
  return (
    <div className={style['search']}>
      <input
        type='search'
        className={style['search-input']}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      <i className={`fas fa-search ${style['search-icon']}`} />
    </div>
  )
}

export default Search
