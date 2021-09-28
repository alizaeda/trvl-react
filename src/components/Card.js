import React from "react";
import { useLocation } from "react-router";
import CardItem from "./CardItem";

const Cards = () => {
  const location = useLocation();
  const cardItems1 = [
    {
      src: "images/img-9.jpg",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
      label: "Adventure",
      path: "/services",
    },
    {
      src: "images/img-2.jpg",
      text: "Travel through the Islands of Bali in a Private Cruise",
      label: "Luxury",
      path: "/services",
    },
  ];
  const cardItems2 = [
    {
      src: "images/img-3.jpg",
      text: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
      label: "Mystery",
      path: "/services",
    },
    {
      src: "images/img-4.jpg",
      text: "Experience Football on Top of the Himilayan Mountains",
      label: "Adventure",
      path: "/products",
    },
    {
      src: "images/img-5.jpg",
      text: "Ride through the Sahara Desert on a guided camel tour",
      label: "Adrenaline",
      path: "/sign-up",
    },
  ];
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cardItems1
              .filter(
                (item) =>
                  item.path === location.pathname || location.pathname === "/"
              )
              .map((item) => (
                <CardItem
                  src={item.src}
                  text={item.text}
                  label={item.label}
                  path={item.path}
                />
              ))}
          </ul>
          <ul className="cards__items">
            {cardItems2
              .filter(
                (item) =>
                  item.path === location.pathname || location.pathname === "/"
              )
              .map((item) => (
                <CardItem
                  src={item.src}
                  text={item.text}
                  label={item.label}
                  path={item.path}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
