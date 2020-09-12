import React from 'react';


const IndivResult = (props) => {
    return (



        <div className="IndivResult">
        <img src={props.img} alt="img"/>
        <h4>{props.name}</h4>
        <p>rating: {props.rating}</p>
        <a href={props.url}>SHOW URL </a>
        </div>
        )
}

export default IndivResult