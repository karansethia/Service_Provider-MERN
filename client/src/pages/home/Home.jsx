import React from "react";
import './Home.scss'
import Featured from "../../components/featured/Featured";
import Quote from "../../components/Quote/Quote";
import Slide from "../../components/Slide/Slide";
import { cards } from '../../data'
import CatCard from '/Users/karansethia/Documents/Iksan/client/src/components/catCard/CatCard.jsx'

export default function Home(){
    return(
        <div className="Home">
            <Featured />
            <Quote />
            <Slide slidesToShow={5} arrowsScroll={2}>
                {cards.map(card => (
                    <CatCard key={card.id} item={card}/>
                ))}
            </Slide>
        </div>
    )
}