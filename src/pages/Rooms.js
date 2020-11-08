import React from "react";
import Hero from "../commponents/Hero";
import Banner from "../commponents/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../commponents/RoomsPage/RoomsConatiner";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}
