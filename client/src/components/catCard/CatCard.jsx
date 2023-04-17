import React from 'react'

const CatCard = () => {
  return (
    <Link to='/servicelist?cat=technician'>
    <div className='catcard'>
        <img src='' alt="" />
        <span className='desc'></span>
        <span className='title'></span>
    </div>
    </Link>
  )
}

export default CatCard