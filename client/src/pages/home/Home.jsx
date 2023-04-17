import React from "react";
import './Home.scss'
import Featured from "../../components/featured/Featured";
import Quote from "../../components/Quote/Quote";
import Slide from "../../components/Slide/Slide";

export default function Home(){
    return(
        <div className="Home">
            <Featured />
            <Quote />
            <Slide />
        </div>
    )
}