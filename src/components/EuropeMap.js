import React from "react";
import { ReactComponent as EuropeMapSVG } from "../assets/europe_map.svg";
import axios from "axios";

class EuropeMap extends React.Component {
  handleClick = (event) => {
    const countryId = event.target;
    console.log("Clicked country:", countryId);

    const clickedCountry = event.target;

    if (this.clickedCountry) {
      this.clickedCountry.classList.remove("clicked");
    }
    clickedCountry.classList.add("clicked");
    this.clickedCountry = clickedCountry;
  };

  render() {
    return <EuropeMapSVG onClick={this.handleClick} className="europe-map" />;
  }
}

export default EuropeMap;
