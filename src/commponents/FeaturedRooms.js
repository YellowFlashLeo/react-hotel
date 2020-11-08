import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import Title from "./Title";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context; // we are getting this data from ProductProvider, same could be done if we wrap component inside ProductConsumer
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      // if loading is true , basically we are still getting data we have img
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
