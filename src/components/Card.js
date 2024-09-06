import { useState } from 'react'
import star from '../images/star.svg'



export default function Card(props) {
    let badgeText;
    if (props.openSpots == 0) {
        badgeText = 'Sold Out';
    }
    else if (props.location == "Online") {
        badgeText = props.location
    }
    //i know that here is better to use something like UseState but It gave me a re-rendering error.
    return (
        <div className="card">
            {badgeText &&
                <div className='card-soldout'>{badgeText}</div>
            }
            <img src={props.coverImg} className='card-img' alt='img'></img>
            <div className='card-stats'>
                <img src={star} className='card-star' alt='star'></img>
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}).</span>
                <span className='gray'>{props.country}</span>
                <p className='card-title'>{props.title}</p>
                <p className='card-price'><strong>From {props.price}</strong>$ /person</p>
            </div>

        </div>
    )
}
