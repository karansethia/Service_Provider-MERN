import React from 'react'
import './ServiceCard.scss'
import { Link } from 'react-router-dom'

const ServiceCard = ({ item }) => {
  return (
    <Link to='/singleService/123'>
    <div className='serviceCard'>
        <img src={item.img} alt="" srcset="" />
        <div className="info"></div>
        <div className="user">
            <img src={item.pp} alt="" srcset="" />
            <span>{item.username}</span>
            <span>{item.star}</span>
        </div>
        <p>{item.desc}</p>
        <div className="star">
            <img src='./img/star.png' alt="" srcset="" />
        </div>
    </div>
    <div className="details">
        <img src="./img/heart.png" alt="" srcset="" />
    </div>
    </Link>
  )
}

export default ServiceCard