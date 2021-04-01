import { CITIES } from "../shared/cities";
import React, { Component } from "react";
import { Image } from "reactstrap";

class CityDirectoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [
        {
          id: 0,
          name: "Charleston",
          state: "South  Carolina",
          stateInitial: "SC",
          image: "assets/img/charleston-md.jpg",
          url: "charleston.html",
          description:
            "Founded in 1670, Charleston is one of the oldest cities in the United States. Come visit it's Historic District where you will find many preserved historic buiuldings   and monuments, such as the Fort Sumter National Monument, dating all the way back to the 17th and 18th centuries.",
        },
        {
          id: 1,
          name: "Seattle",
          state: "Washington",
          stateInitial: "WA",
          image: "assets/img/seattle-md.jpg",
          url: "seattle.html",
          description:
            "Starbucks, Microsoft and Amazon. All call Seattle home. If you're a fan of the rain, here you will find an average of 150 rainy days per year. If not, you will still get to enjoy amazing weather during the spring and summer time. Come and enjoy some of the top destinations like the Seattle Space Needle and the Pike Place Market. And don't forget the coffee...",
        },
        {
          id: 3,
          name: "Charlotte",
          state: "North Carolina",
          stateInitial: "NC",
          image: "assets/img/Charlotte-1.jpg",
          url: "charlotte.html",
          description:
            "Charlotte. Not a city many have on their list of destinations. But that is quickly changing. As one of the fastest growing cities in the United States during the last 20 years, Charlotte has grown from a small Southern town to now being of the largest cities in the country. Visitors of Charlotte can find many popular attractions, such as the U.S National Whitewater Center or visit over the 30 local breweries in the area.",
        },
      ],
    };
  }

  render() {
    const cityDirectory = this.state.cities.map((city) => {
      return (
        <div key={city.id} className="col-lg-4 content-col">
          <div className="card cards">
            <a href="charleston.html">
              <img
                className="img-fluid rounded img-thumbnail"
                src={city.image}
                alt={city.name}
              />
            </a>
            <div className="card-body">
              <h1 className="text-center card-title">
                {city.name}, {city.stateInitial}
              </h1>
              <p className="card-text text-center lead city-desc-par">
                {city.description}
              </p>
            </div>
          </div>
        </div>
        // <div className="col">
        //     <img src={city.image} alt={city.name} />
        //     <h2>{city.name}</h2>
        //     <p>
        //         {city.stateInitial}
        //     </p>
        // </div>
      );
    });

    return (
      <>
        <div className="container-fluid">
          <div className="row mb-0">
            <div className="col text-center">
              <h1>Trending Cities</h1>
            </div>
          </div>
          <div className="row mt-0">
            {cityDirectory}
          </div>
        </div>
      </>
    );
  }
}

export default CityDirectoryComponent;
