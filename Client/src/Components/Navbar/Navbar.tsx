import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faHome, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useHistory
} from "react-router-dom";
import "./Navbar.css";

/** 
 * Navbar should check what the current route is
 * After the current route is checked, can dynamically show buttons
 * If HomePage -> Don't Show homepage
 *             -> Don't Show backbutton
 *             -> Show Categories Button/Menu
 *             -> Show Add Person Button 
 * 
 * **/


export const Navbar = () => {
  let location = useLocation();
  let history = useHistory();

  const backClickHandler = () => {
    history.goBack();
  }

  // if (location.pathname == '/') {
  //   return (
  //     <nav>
  //         <div className="button-wrapper rounded-sm hover:bg-gray-500 cursor-pointer">
  //           <button className="button h-12">Add Person</button>
  //         </div>
  //     </nav>
  //   )
  // }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={location.pathname}>
          <div onClick={backClickHandler} className="button-wrapper rounded-md hover:animate-pulse text-purple-400 cursor-pointer">
            <button className="button lg-view">Go Back {"   "}
              <FontAwesomeIcon icon={faBackward} size="lg" />
            </button>
              <FontAwesomeIcon icon={faBackward} size="lg" className="sm-view"/>
          </div>
        </Link>
        <Link to="/">
          <div className="button-wrapper rounded-md hover:animate-pulse text-purple-400 cursor-pointer">
            <button className="button lg-view">Home {"  "}
              <FontAwesomeIcon icon={faHome} size="lg"/>
            </button>
            <FontAwesomeIcon icon={faHome} size="lg" className="sm-view"/>
          </div>
        </Link>
        <Link to="/submission">
        <div className="button-wrapper rounded-md hover:animate-pulse text-purple-400 cursor-pointer">
            <button className="button lg-view">Add Person {"  "}
              <FontAwesomeIcon icon={faUserPlus} size="lg"/>
            </button>
            <FontAwesomeIcon icon={faUserPlus} size="lg" className="sm-view"/>
          </div>
        </Link>
      </div>
    </nav>

  );
};
