import React from "react";
import Card from "./card";

const CardList = ({ monsters }) => {
  return (
    <div className="pt3 pb3">
      {monsters.map((user, i) => {
        return (
          <Card
            key={i}
            id={monsters[i].id}
            name={monsters[i].name}
            email={monsters[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
