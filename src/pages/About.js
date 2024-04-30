import React from 'react';
import AboutUs from "../assets/aboutus.png";
import "../styles/About.css";

function About() {
    return (
        <div className='about'>
            <div className='aboutTop'
                style={{ backgroundImage: `url(${AboutUs})` }}>
            </div>
            <div className='aboutBottom'>
                <h1> ABOUT US </h1>
                <p>
                At vzemikniga.bg, we believe that every page turned is a journey embarked upon. Our love for books runs deep, and we’re passionate about sharing that love with fellow bibliophiles. Our story began in a cozy corner of a local bookstore, where our founder, Emily, lost herself in the magic of words. Inspired by the way books transport us to different worlds, she envisioned a place where readers could explore, discover, and connect.
                </p>
                <p>
                Our mission is simple: to ignite the joy of reading. We curate an extensive collection of books across genres, from timeless classics to contemporary bestsellers. Whether you’re seeking adventure, romance, mystery, or personal growth, we’ve got you covered.
                </p>
                <p>
                Explore our virtual shelves, lose yourself in captivating narratives, and let the scent of ink and paper transport you. BookWorms is more than a bookstore—it’s a haven for dreamers, thinkers, and wanderers.
                Happy reading!
                </p>
            </div>
        </div>
    )
}

export default About