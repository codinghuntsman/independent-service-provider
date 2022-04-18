import React from 'react';
import './Home.css';
import images from '../../images/dr-rahman-removebg.png';

const Home = () => {
    return (
        <div className='img'>
            <img src={images} alt="" />
            <div className='doctor-title'>
                <h2>Dr. Lutfor Rahman</h2>
                <h4>MBBS, MS (CTS)</h4>
                <h4>Chief cardiac surgeon</h4>

            </div>
        </div>
    );
};

export default Home;