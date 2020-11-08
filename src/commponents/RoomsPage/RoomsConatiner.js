//Implementation using Higher Order Component
import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomsList";
import { withRoomConsumer } from "../../context";
import Loading from "../Loading";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

//Normal Implemenattion using just Consumer in context API
/*import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomsList";
import { RoomConsumer } from "../../context";
import Loading from "../Loading";

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            Hello From Rooms RoomsContainer
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}*/
