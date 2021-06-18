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
            <button className="button">Go Back {"   "}
              <FontAwesomeIcon icon={faBackward} size="lg" />
            </button>
          </div>
        </Link>
        <Link to="/">
          <div className="button-wrapper rounded-md hover:animate-pulse text-purple-400 cursor-pointer">
            <button className="button">Home {"  "}
              <FontAwesomeIcon icon={faHome} size="lg" className="" />
            </button>
          </div>
        </Link>
        <Link to="/submission">
          <div className="button-wrapper rounded-md hover:animate-pulse text-purple-400 cursor-pointer">
            <button className="button">Add Person {"   "}
              <FontAwesomeIcon icon={faUserPlus} size="lg" />
            </button>
          </div>
        </Link>
      </div>
    </nav>

  );
};
