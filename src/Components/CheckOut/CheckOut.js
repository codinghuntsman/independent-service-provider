import React from 'react';
import './CheckOut.css';
import image from '../../images/dr-rahman1.png'

const CheckOut = () => {
    return (
        <div >
            <div className='checkout'>
                <h2>I'm  providing best cardiac service for 15 years !!!</h2>
                <img src={image} alt="doctor" />

            </div>
        </div>
    );
};

export default CheckOut;