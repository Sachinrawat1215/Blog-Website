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
                    <Link to="/">All Categories</Link>
                </button>
                <button>
                    <Link to="/?category=Music">Music</Link>
                </button>
                <button>
                    <Link to="/?category=Movie">Movies</Link>
                </button>
                <button>
                    <Link to="/?category=Sport">Sports</Link>
                </button>
                <button>
                    <Link to="/?category=Tech">Tech</Link>
                </button>
                <button>
                    <Link to="/?category=Fashion">Fashion</Link>
                </button>
            </div>
        </div>
    )
}

export default Left;