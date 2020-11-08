import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg"; // so that  if for some reason we lose url of the image we get default instead of error on the screen
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price } = room; // we get all those props from roomm which is passed from featured room

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link
          to={`/rooms/${slug}`} // since in app.js we have route to signleRoom as "/rooms/:slug" component={SingleRoom} /> slug is written for each object in data.js
          className="btn-primary room-link"
        >
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  // we check Room component and prop which is passed to it and which is object thats why we say .shape after
  // and go through all properties inside room object and specify rules
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // images prop should be array of strings
    price: PropTypes.number.isRequired,
  }),
};
