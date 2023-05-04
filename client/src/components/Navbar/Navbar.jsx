import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Navbar.scss'
import iksanLogo from './Iksan.png'
import { newRequest } from "../../utils/newRequest";
export default function Navbar(){

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const {pathname} = useLocation()

    // const isActive = () =>{
    //     window.scrollY > 10 ? setActive(true) : setActive(false);
    // }
    // useEffect(()=>{
    //     window.addEventListener('scroll', isActive);

    //     return () => {
    //         window.removeEventListener('scroll',isActive);
    //     }
    // },[]);


    //? Getting user details from local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    //? Logout function
    const handleLogout = async () => {
        try {
            await newRequest.post('/auth/logout');
            localStorage.setItem("currentUser", null);
            navigate('/')
        } catch (error) {
            console.log(err);
        }
    }

    return(
        <div className={active || pathname!=='/' ? "Navbar active" : "Navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to='/'>
                    <img src={iksanLogo} alt="logo" />
                    </Link>
                </div>
                <div className="links">
                    <span>Services</span>
                    <span>Explore</span>
                    <span>Dashboard</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
                </div>
            </div>
        </div>

    )

}