import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/Logo.png";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from '@mui/icons-material/Close';

// This "Nav" component is for window with desktop width and screen width less than 768px. The Navbar consist of toggle menu for better responsive user interface.

const Nav = () => {

// condition for mobile responsive

  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    window.innerWidth < 768 ? setMobile(true) : setMobile(false);
  }, [mobile]);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  function NavlinksForMobile() {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  // array of objects containg navbar details

  const navbarData = [
    { path: "/", text: "Home" },
    { path: "/my-quiz", text: "My Quizes" },
    { path: "/play-quiz", text: "Play Quiz" },
  ];

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" width="120px" />
          </Link>
        </div>
        {mobile ? 
        isMenuOpen ?
        <div className="nav-links-mobile">
           <CloseIcon onClick={NavlinksForMobile}/>
         </div>
           :
        <div className="nav-links-mobile">
          <DensityMediumIcon onClick={NavlinksForMobile}/>
        </div>
      : 
      <div className="nav-links">
      {navbarData.map((i,index)=>(
        
      <ul>
        <li>
          <Link to={i.path} key={index}
            className={({ isActive }) => (isActive ? "activenav" : "")}
          >
            {i.text}
          </Link>
        </li>
        </ul>
        
      ))}
    </div>
      }
      {isMenuOpen && (
              <div className="menu">
                {navbarData.map((i,index) => (
                  <ul>
                  <li>
                    <Link to={i.path} key={index} onClick={NavlinksForMobile}>{i.text}</Link>
                  </li>
                  </ul>
                ))}
              </div>
            )}
      </div>
      <Outlet/>
    </>
  );
};

export default Nav;
