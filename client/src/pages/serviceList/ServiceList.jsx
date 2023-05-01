import React from "react";
import './ServiceList.scss'
import { singleServiceList } from "../../data";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { useState } from "react";
import downArrow from '../../../public/img/down-arrow.png'

export default function ServiceList(){

    const [open, setOpen] = useState('sales') ;   
    const [sort, setSort] = useState('Frequently booked');
    
    const reSort = type =>{
        setSort(type);
        setOpen(false)
    }

    return(
        <div className="ServiceList">
            <div className="container">
                <span className="breadcrumbs">
                    IKSAN . TECHNICIAN
                </span>
                <h1>TECHNICIAN</h1>
                <p>Explore Iksan's best and certified technicians</p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input type="text" placeholder="min"/>
                        <input type="text" placeholder="max"/>
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">Sort By</span>
                        <span className="sortType">{sort === 'sales' ? 'Most booked' : 'Newest'}</span>
                        <img src={downArrow} alt="" sizes="" onClick={()=>{
                            setOpen(!open)
                        }}/>
                        {open && (
                            <div className="rightMenu">
                            {sort === "sales" ? (
                                <span onClick={() => reSort("createdAt")}>Newest</span>
                            ) : (
                                <span onClick={() => reSort("sales")}>Most booked</span>
                            )}
                            <span onClick={() => reSort("sales")}>Popular</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="cards">
                    {singleServiceList.map((singleService =>(
                        <ServiceCard key={singleService.id} item={singleService}/>
                    )))}
                </div>
            </div>
        </div>
    )
}