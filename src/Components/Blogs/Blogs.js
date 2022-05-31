import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='service'>
            <div>
                <h2>What is the difference between authentication and authorization?</h2>
                <p>
                    authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger's identity has been determined, the second step is verifying any special services the passenger has access to, whether it's flying first-class or visiting the VIP lounge.
                </p>
            </div>
            <div>
                <h2>Why are we using google firebase?</h2>
                <p>
                    Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.
                    Therefore, implementing Firebase means plugging a ready-made backend into your client code to make it dynamic. Ultimately, it eliminates the need to write backend code from scratch and gives you a fully functional one instead.
                </p>
                <h4>Others option to implement authentication</h4>
                <p>
                    Multi-factor authentication- is a high-quality authentication method that utilizes two or more techniques that work independently of each other to identify each user. Examples of MFA include device-based verification, the use of additional password tests, and location-based information.
                </p>
            </div>
            <div>
                <h2>What does other firebase authentication service provider?</h2>
                <p>
                    <h4>Biometric authentication</h4>
                    Biometric authentication is a multifaceted authentication method that uses a person’s biological characteristics to access a system. Biometric authentication methods include facial recognition, fingerprint recognition, retina recognition, voice recognition, and numerous others. These methods are designed to enable people’s biological traits to become easily verified against features shared in a database, control access, and become seamlessly incorporated into multi-factor authentication operations. Each biometric method has both its pros and cons.
                </p>
                <p>Md sajedul islam</p>
            </div>
        </div>
    );
};

export default Blogs;