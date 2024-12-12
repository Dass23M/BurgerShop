import React from 'react'
import './Title.css'

const Title = ({title, subTitle}) => {
  return (
    <div className='title'>
        <h2>{title}</h2>
        <p>{subTitle}</p>
        
    </div>
  )
}

export default Title