import './header.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    //HOOKS
    const navigate = useNavigate();


    return (
        <div className='container-header'>
            <div onClick={()=> navigate('/home')}>
                Home
            </div>
            <div onClick={()=> navigate('/about')}>
                About
            </div>
            <div onClick={()=> navigate('/character')}>
                Characters
            </div>
        </div>
    );
}

export default Header;
