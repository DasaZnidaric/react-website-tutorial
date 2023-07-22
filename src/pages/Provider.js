import React from "react";
import { ProviderList } from "../helpers/ProviderList";
import ProviderItem from "../components/ProviderItem";
import "../styles/Provider.css";

function Provider() {
  return (
    <div className="provider">
      <h1 className="providerTitle">Ponudniki storive</h1>
      <div className="providerList">
        {ProviderList.map((providerItem, key) => {
          return (
            <ProviderItem
              key={key}
              image={providerItem.image}
              name={providerItem.name}
              place={providerItem.place}
              type={providerItem.type}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Provider;
