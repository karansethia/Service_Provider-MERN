import React from 'react'

const CatCard = ({ item }) => {
  return (
    <Link to='/servicelist?cat=technician'>
      <div className='catcard'>
          <img src={item.img} alt="" />
          <span className='desc'>{item.desc}</span>
          <span className='title'>{item.title}</span>
      </div>
    </Link>
  )
}

export default CatCard