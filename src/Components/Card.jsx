import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({element}) => {
    const url = element.picture || "https://bit.ly/3qQvgFU";
    return (
        <div>
            <div className="card-box">
                <Link to={`/post/${element._id}`} >
                    <img src={url} alt="logo" />
                    <p id="small">Tech</p>
                    <p>{element.title}</p>
                    <p id="small">Author: Sachin Rawat</p>
                    <p id="paragraph">{element.description}</p>
                </Link>
            </div>
        </div>
    )
}

export default Card;