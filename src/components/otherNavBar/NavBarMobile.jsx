import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '../navbar/styles';
import { ReactComponent as MenuIcon } from "./../../assets/hamburger.svg";
import NSULOGO from "./../../assets/nsuLogo.png";

function NavBarMobile({setMobileBurger}) {

    const BurgerButtonHandler = () => {
        setMobileBurger(true);
    }

    return (
        <div className='navbar-mobile'>
            <Link to="/">
            <img src={NSULOGO} alt="" />
            </Link>
            <Icon onClick={BurgerButtonHandler}>
                <MenuIcon />
            </Icon>
        </div>
    )
}

export default NavBarMobile