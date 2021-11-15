import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }} > 
            <div className="headerContainer">
                <h1>Dominos Pizza</h1>
                <p>WE MAKES DREAMS A REALITY</p>
                <Link to="/menu">
                <button> ORDER NOW </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
