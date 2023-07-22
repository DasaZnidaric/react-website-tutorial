import React from "react";

function ProviderItem({ image, name, place, type }) {
  return (
    <div className="providerItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>
        {" "}
        {place} - {type}{" "}
      </p>
    </div>
  );
}

export default ProviderItem;
