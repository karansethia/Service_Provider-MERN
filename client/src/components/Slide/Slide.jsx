import React from 'react'
import { cards } from '../../data'
import Slider from 'infinite-react-carousel'
import CatCard from '../catCard/CatCard.jsx'
import './Slide.scss'

const Slide = ({children, arrowsScroll, slidesToShow}) => {
  return (
    <div className='slide'>
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  )
}

export default Slide