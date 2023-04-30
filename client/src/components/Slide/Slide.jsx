import React from 'react'
import Slider from 'infinite-react-carousel'
import './Slide.scss'
import '/Users/karansethia/Documents/Iksan/client/node_modules/infinite-react-carousel/lib/carousel/style.css?inline'


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