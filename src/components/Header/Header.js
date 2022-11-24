import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "./Header.css";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import Location from './Location'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Navigate } from "react-router-dom";
import { useStateValue } from "../Stateprovider";
import { auth } from "../firbase";
import { signOut } from "firebase/auth";

// import SearchIcon from '@material-ui/icons/Search';
function Header() {
  // to push or pull data
  const [{ basket, user }, dispatch] = useStateValue();

  const loginLogout = () => {
    if (user) {
      signOut(auth);
      Navigate("/login");
    }
  };
  return (
    <div className="header">
      <div className="header_option header">
      <div>
        <Link to="/">
          <img
            className="header-image"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
      </div>
      <Link to="/address">
      <div className="select_location ">
        <a href="#" className="header_optio">
          Deliver to 
          <div className="header_nav">
            <span>
              <PlaceIcon />
              </span>
          {/* <GooglePlacesAutocomplete
          apiKey=""
          /> */}
              <span className="location">
              <Location/>
              </span>
          </div>
        </a>
      </div>
      </Link>
      </div>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div>
      <div className="search-icon">
        <SearchIcon />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <select name="language-picker-select" id="language-picker-select">
            <option lang="de" value="deutsch">
              Deutsch
            </option>
            <option lang="en" value="english">
              English
            </option>
            <option lang="fr" value="francais">
              Français
            </option>
            <option lang="it" value="italiano">
              Italiano
            </option>
          </select>
        </div>

        <Link className="aLinks " to={!user && "/login"}>
          <div className="header_option" onClick={loginLogout}>
            <span className="header_optionalone">
              Hello {!user ? "Guest" : user.email} <br />
            </span>
           <span className="header_optionaltwo">
           {user ? "sign out" : "sign in"}
           </span>
          </div>
        </Link>

          {/* link to orders*/}
        <Link to="/orders" className="aLinks">
        <div className="header_option">
          <span className="header_optionalone">
            returns <br />
          </span>
          <span className="header_optionaltwo">& Order</span>
        </div>
        </Link>
        <Link className="aLinks" to="/checkout">
          <div className="header_option cart-logo">
            <ShoppingCartIcon />
            <span className="header_optionaltwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
