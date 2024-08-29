import Axios from "axios";
import React, { useState } from "react";

function PartyExcuse() {
  const [getApi, setApi] = useState({});

  const getFetch = (name) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${name}`).then(
      (resp) => {
        console.log("resp==>", resp);
        setApi(resp.data[0]);
      }
    );
  };
  const getParty = (name) => {
    getFetch(name);
  };
  return (
    <div>
      <h1>Get An Excuse</h1>
      <button onClick={() => getParty("party")}>Party</button>
      <button onClick={() => getParty("family")}>Family</button>
      <button onClick={() => getParty("office")}>Office</button>

      <h3>The response is below</h3>
      <br />
      <br />
      <div>{getApi.excuse}</div>
    </div>
  );
}

export default PartyExcuse;
