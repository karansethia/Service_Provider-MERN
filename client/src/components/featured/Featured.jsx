import React from 'react'
import './Featured.scss'
// import heroImg from ''

const Featured = () => {
    return (
        <div className='featured'>
            <div className="container">
                <div className="left">
                    <h1>Find the best <span>Services</span> for your daily needs</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" />
                            <input type="text" placeholder='Try "TV Repair"' />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Mobile Repair</button>
                        <button>Carpenter</button>
                        <button>Refrigerator Repair</button>
                        <button>Bathroom Fixing</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/hero1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured