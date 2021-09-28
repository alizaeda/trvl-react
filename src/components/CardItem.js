import React from "react";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";

const CardItem = ({ path, src, label, text }) => {
  return (
    <>
      <Bounce top>
        <li className="cards__item">
          <Link className="cards__item__link" to={path}>
            <figure className="cards__item__pic-wrap" data-category={label}>
              <img className="cards__item__img" alt={label} src={src} />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{text}</h5>
            </div>
          </Link>
        </li>
      </Bounce>
    </>
  );
};

export default CardItem;
