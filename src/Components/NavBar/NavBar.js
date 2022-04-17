import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import CustomLink from './../CustomLink/CustomLink';
import useFirebase from '../../UseFirebase/UseFirebase';
const NavBar = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='navbar'>
            <Link to='home'><h1>Firebase</h1></Link>
            <nav>
                <CustomLink to='/'></CustomLink>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/service'>Service</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                {
                    user?.uid ? <button className='logout-btn' onClick={handleSignOut}>Log out</button>
                        : <CustomLink to='/login'>Login</CustomLink>
                }
            </nav>
        </div >
    );
};

export default NavBar;