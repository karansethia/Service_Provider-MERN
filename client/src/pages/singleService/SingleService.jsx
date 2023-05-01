import React from "react";
import './SingleService.scss'
import Slider from 'infinite-react-carousel'

export default function SingleService() {
    return (
        <div className="SingleService">
            <div className="container">
                <div className="left">
                    <span className="breadCrumbs">
                        IKSAN - FURNITURE AND CARPENTRY
                    </span>
                    <h1>I will create luxurious furniture for you</h1>
                    <div className="user">
                        <img src='/img/user1.jpg' alt="" className="pp" />
                        <span>Mihir Patel</span>
                        <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                    </div>
                    <Slider slidesToShow={1} arrowsScoll={1}>
                        <img src="/img/img1.jpg" alt="" />
                        <img src="/img/img2.jpg" alt="" />
                        <img src="/img/img3.jpg" alt="" />
                        <img src="/img/img4.jpg" alt="" />
                    </Slider>
                    <h2>About this Service</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="seller">
                        <h2>About the Seller</h2>
                        <div className="user">
                            <img src="/img/user1.jpg" alt="" />
                            <div className="info">
                                <span>Mihir Patel</span>
                                <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <span className="title">From</span>
                                    <span className="desc">Mehsana</span>
                                </div>
                                <div className="item">
                                    <span className="title">Member Since</span>
                                    <span className="desc">2023</span>
                                </div>
                                <div className="item">
                                    <span className="title">Avg response time</span>
                                    <span className="desc">3 hours</span>
                                </div>
                                <div className="item">
                                    <span className="title">Last Booking</span>
                                    <span className="desc">1 day</span>
                                </div>
                                <div className="item">
                                    <span className="title">Languages</span>
                                    <span className="desc">English, Hindi, Gujarati</span>
                                </div>
                            </div>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <img
                                    className="pp"
                                    src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className="info">
                                    <span>Garner David</span>
                                    <div className="country">
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img
                                    className="pp"
                                    src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className="info">
                                    <span>Sidney Owen</span>
                                    <div className="country">
                                        <span>Germany</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img
                                    className="pp"
                                    src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className="info">
                                    <span>Lyle Giles </span>
                                    <div className="country">
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="price">
                        <h3>Mihir's Furnishings</h3>
                        <h2>Rs 599+</h2>
                    </div>
                    <p>
                        I will create a luxurious and beautiful furniture for you
                    </p>
                    <div className="details">
                        <div className="item">
                            <img src="/img/clock.png" alt="" />
                            <span>2 Days Delivery</span>
                        </div>
                        <div className="item">
                            <img src="/img/recycle.png" alt="" />
                            <span>3 Revisions</span>
                        </div>
                    </div>
                    <div className="features">
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Custom wood art</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Sunmicah and wood polishing</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Skilled artisans</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Custom wood with resin</span>
                        </div>
                    </div>
                    <button>Continue</button>
                </div>

            </div>
        </div>
    )
}