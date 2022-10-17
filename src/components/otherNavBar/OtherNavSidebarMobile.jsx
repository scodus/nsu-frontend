import React from 'react'
import { NavLink } from "react-router-dom";
import Hamburger from "../../assets/hamburger.svg";


function OtherNavSidebarMobile({ isBurger, setBurger }) {
    const mainBurgerStyle = {
      width: "100%",
      height: "100vh",
      background: "rgba(0,0,0,0.4)",
      position: "absolute",
      top: 0,
      left: 0,
      transformOrigin: "center left",
      transition: "200ms ease-in",
      display: "flex",
    };
  
    let burgerStyles = {
      width: "85%",
      height: "100vh",
      background: "linear-gradient(133.63deg, #6386FF -6.69%, #533289 108.49%)",
      transformOrigin: "center left",
      transition: "200ms ease-in",
      zIndex: "1000000",
    };
  
    let closeBurgerStyles = {
      width: "15%",
    };
  
    let mainburgerTransformCheck = isBurger ? { left: "0" } : { left: "-100%" };
    const HamBurgerHandler = () => {
      setBurger(false);
    };
  
    let activeStyle = {
      // textDecoration: "underline",
      color: "#1FF8D1",
    };
  
    let activeClassName = "underline";
  
    return (
      <div
        className="all-nav-burger-container"
        style={{ ...mainBurgerStyle, ...mainburgerTransformCheck }}
      >
        <div style={{ ...burgerStyles }} className="nav-burger-items-container">
          <div className="nav-burger-container">
            <div className="nav-burger-hamburger">
              <img src={Hamburger} alt="" onClick={HamBurgerHandler} />
            </div>
  
            <div className="nav-burger-details">
              <div className="nav-burger-titles">
                <h1 className="font-family-gravedigger color-white h1-height">
                  MENU
                </h1>
              </div>
              <div className="nav-burger-items nav-bar-items-mobile">
                <ul>
                  
                <li onClick={HamBurgerHandler}>
                    <NavLink
                      to="/hackathon"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {" "}
                        HACKATHON
                    </NavLink>
                  </li>

                  <li onClick={HamBurgerHandler}>
                    <NavLink
                      to="/startup"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {" "}
                      STARTUP IDEAS
                    </NavLink>
                  </li>

                  <li onClick={HamBurgerHandler}>
                    <NavLink
                      to="/exhibition"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {" "}
                      EXHIBITION
                    </NavLink>
                  </li>
                  <li onClick={HamBurgerHandler}>
                    <NavLink
                      to="/robowars"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {" "}
                      ROBO WARS
                    </NavLink>
                  </li>
                  <li onClick={HamBurgerHandler}>
                    <NavLink
                      to="/events"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {" "}
                      ALL EVENTS
                    </NavLink>
                  </li>
                  <li onClick={HamBurgerHandler}>
                    <NavLink
                      to="/panel"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {" "}
                      PANEL LIST
                    </NavLink>
                  </li>
                  <li onClick={HamBurgerHandler}>
                    <NavLink
                      to="/teams"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      TEAM MEMBERS{" "}
                    </NavLink>
                  </li>
                  <li onClick={HamBurgerHandler}>
                    <NavLink
                      to="/sponsers"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {" "}
                      SPONSERS
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="close-Navburger"
          style={closeBurgerStyles}
          onClick={HamBurgerHandler}
        ></div>
      </div>
    );
  }

export default OtherNavSidebarMobile