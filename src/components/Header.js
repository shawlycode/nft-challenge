import React from "react";
import "./header.css";
import nftLogo from "../assets/nft-logo1.png";
import SearchIcon from "@mui/icons-material/Search";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { fontSize } from "@mui/system";
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={nftLogo} alt="logo" className="logo" />
      </div>
      <div className="searchBar">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <input
          className="searchInput"
          placeholder="collections, items and user"
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <ModeNightIcon style={{ color: "yellow" }} />
        </div>
      </div>
      <div className="button">GET IN</div>
    </div>
  );
};

export default Header;
