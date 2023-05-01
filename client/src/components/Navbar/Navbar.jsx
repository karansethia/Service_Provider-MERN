import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.scss'
import iksanLogo from './Iksan.png'
export default function Navbar(){

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation()

    const isActive = () =>{
        window.scrollY > 10 ? setActive(true) : setActive(false);
    }
    useEffect(()=>{
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll',isActive);
        }
    },[]);

    const currentUser = {
        id: 1,
        username: "Mihir Patel",
        isSeller: true
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
                    {!currentUser?.isSeller && <span> Become a Seller</span>}
                    {/* {!currentUser?.isSeller && <button>Join</button>} */}
                    {currentUser && (
                        <div className="user" onClick={()=>{setOpen(!open)}}>
                            <img src="" alt="userimage" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                        <Link className="link" to='/sellerdash'>Services Provided</Link>
                                        <Link className="link" to='/addservice'>Add a new Service</Link>
                                    </>
                                )}
                                <Link className="link" to='/orders'>Service Requests</Link>
                                <Link className="link" to='/messages'>Messages</Link>
                                <Link className="link" to='/'>Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
        </div>

    )

}