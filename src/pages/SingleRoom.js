import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../commponents/Hero";
import Banner from "../commponents/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../commponents/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    // by using ctor we get access to props
    super(props); // since we extend Component class
    this.state = {
      // now we refer to this ctor with passed props
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    let room = getRoom(this.state.slug);

    // maybe required room by the slug being passed by url doesnt exist then let user navigate back
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    //const [mainImg, ...defaultImg] = images;
    // we are using StyledHero because we want to display image of the room we are clicking on
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size}SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>

        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> -{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
