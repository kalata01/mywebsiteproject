import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/library.png"
import "../styles/Home.css"

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'>
                <h1> Do you want to buy a book? </h1>
                <p> A book is a window to a new world! </p>
                <Link to="/catalog">
                    <button> BUY NOW </button>
                </Link>
            </div>
        </div>
    );
}

export default Home
