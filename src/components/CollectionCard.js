import React from "react";
import "./CollectionCard.css";

const eth = require("../assets/eth.png");

const CollectionCard = ({ image, name, id, price }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="" className="nft4-img" />
      <div className="details">
        <div className="name">
          <h3> {name}</h3>
        </div>
        <div className="priceContainer">
          <img src={eth} alt="" className="eth-img" />
          <div>
            EHT <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
