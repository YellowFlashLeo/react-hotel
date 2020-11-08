import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "All our clients are obliged for totally free variety of cocktails",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "You never hiked before? Well now is the time!!!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Dont worry, transport is provided by the hotel free of charge",
      },
      {
        icon: <FaBeer />,
        title: "Belgium beer",
        info: "Belgium beer is the best beer and dont argue just drink",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
