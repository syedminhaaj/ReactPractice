import React, { useState } from "react";
import Axios from "axios";

function GetApi() {
  //   const [catFact, setCatFact] = useState("");
  //   const fetchCatFact = () => {
  //     Axios.get("https://catfact.ninja/fact").then((res) => {
  //       setCatFact(res.data.fact);
  //     });
  //   };
  //   return (
  //     <div>
  //       <button onClick={fetchCatFact}>Generate Cat Fact</button>
  //       <br />
  //       {catFact}
  //     </div>
  //   );

  const [getDetails, setDetails] = useState({});
  const [getAge, setAge] = useState("");
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${getAge}`).then((res) => {
      console.log("what is the res", res);
      setDetails(res.data);
      setAge("");
    });
  };

  const setNameFunction = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <input
        value={getAge}
        placeholder="Ex.. Pedro.."
        onChange={setNameFunction}
      />
      <button onClick={fetchData}>Predict Age</button>
      <br />
      <div>Name ={getDetails.name}</div>
      <div>Age = {getDetails.age}</div>
    </div>
  );
}

export default GetApi;
