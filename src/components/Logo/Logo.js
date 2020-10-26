import React from 'react';
import LogoImage from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css';

const logo = props => {
    return (
    <div className={classes.Logo}>
        <img src={LogoImage} alt="My Burger" />
    </div>
    );
}

export default logo;