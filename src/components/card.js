import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="pointer tc grow white bg-custom br3 pa3 ma2 dib bw2 shadow-5">
      <div className="card-image pa3 br3">
        <img
          alt="monsters"
          src={`https://robohash.org/${id}?set=set2&size=200x200`}
        />
      </div>
      <div className="card-text">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
