import React from 'react';
import './Home.css';
import images from '../../images/dr-rahman-removebg.png';

const Home = () => {
    return (
        <div className='img'>
            <img src={images} alt="" />
        </div>
    );
};

export default Home;