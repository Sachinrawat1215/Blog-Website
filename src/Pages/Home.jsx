import React from 'react';
import Header from '../Components/Header';
import Left from '../Components/Left';
import Right from '../Components/Right';


const Home = () => {
    return (
        <div>
            <Header />
            <center>
                <h1>Blog Website</h1>
            </center>
            <div className="container">
                <Left />
                <div className="right-container">
                    <Right />
                </div>
            </div>
        </div>
    )
}

export default Home;
