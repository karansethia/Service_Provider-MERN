import React from 'react'
import './ServiceCard.scss'
import { Link } from 'react-router-dom'

const ServiceCard = ({ item }) => {
    return (
        <Link to='/singleService/123' className='link'>
            <div className='serviceCard'>
                <img src={item.img} alt="" />
                <div className="info">

                    <div className="user">
                        <img src={item.pp} alt="" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="star">
                        <img src='./img/star.png' alt="" />
                        <span>{item.star}</span>
                    </div>
                </div>
                <hr />
                <div className="detail">
                    <img src="./img/heart.png" alt="" className='heart' />
                    <div className="price">
                        <span>STARTING AT</span>
                        <h2>$ {item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ServiceCard