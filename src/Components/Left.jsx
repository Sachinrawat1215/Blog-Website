import React from 'react'
import {Link} from 'react-router-dom';

const Left = () => {
    return (
        <div>
            <div className="left-container">
                <button id="mainBtn">
                    <Link to="/create">Create Blog</Link>
                </button>
                <button>
                    <Link to="/Home">All Categories</Link>
                </button>
                <button>
                    <Link to="/">Music</Link>
                </button>
                <button>
                    <Link to="/">Movies</Link>
                </button>
                <button>
                    <Link to="/">Sports</Link>
                </button>
                <button>
                    <Link to="/">Tech</Link>
                </button>
                <button>
                    <Link to="/">Fashion</Link>
                </button>
            </div>
        </div>
    )
}

export default Left;