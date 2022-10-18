import React from 'react'
import { NavLink } from 'react-router-dom';
import { Icon } from '../navbar/styles';
import { ReactComponent as MenuIcon } from "./../../assets/hamburger.svg";
import NSULOGO from "./../../assets/nsuLogo.png";
import {NavCenterLink} from "./../navbar/styles"


function NavBarMobile({setMobileBurger}) {

    const BurgerButtonHandler = () => {
        setMobileBurger(true);
    }

    return (
        <div className='navbar-mobile'>
            <NavCenterLink
              to="/"
              state={{ clicked: true }}
              style = {{margin : "0"}}
            >
             <img src={NSULOGO} alt="" />
            </NavCenterLink>


            <Icon onClick={BurgerButtonHandler}>
                <MenuIcon />
            </Icon>
        </div>
    )
}

export default NavBarMobile