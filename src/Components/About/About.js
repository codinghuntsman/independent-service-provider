import React from 'react';
import './About.css';
import sobuj from '../../images/sobuj.png';

const About = () => {
    return (
        <div className='image-div'>
            <div>
                <img src={sobuj} alt="images" />
            </div>
            <div>
                <h2>My goal in life</h2>
                <p>
                    My name is Md sajedul islam.i'm studying in a University right now.before many days ago i was intended to be a web developer.i think i'm walking that road that was my dream.i wanna achieve my goals, and what has helped me to become to what I always wanted. In addition, I will talk about the challenges that have been facing me, and how I amazingly could overcome the odds. However, everybody in life has will and determination, and we all are given a life to compose it special by achieving our goals, and not letting obstructions to stop us from following our dreams. There are common factors that have been assisting me to be successful in my studying amd programming, my life and my relationships. First of all, I have several types of aims in my life. Being an announcer or presenter is one of my main goals that I've always been dreaming to be.
                </p>
            </div>
        </div>
    );
};

export default About;