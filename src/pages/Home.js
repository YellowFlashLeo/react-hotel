import React from "react";
import Hero from "../commponents/Hero";
import Banner from "../commponents/Banner";
import { Link } from "react-router-dom";
import Services from "../commponents/Services";
import FeaturedRooms from "../commponents/FeaturedRooms";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="luxurius rooms"
          subtitle="deluxe rooms starting at $299.0"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
}
