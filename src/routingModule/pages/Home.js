import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
function Home() {
  //   const { username } = useContext(AppContext);
  //   const { data } = useQuery(["cat"], () => {
  //     return Axios.get("https://catfact.ninja/fact").then((resp) => {
  //       return resp.data; // Corrected: Return the data here
  //     });
  //   });
  const { data, isLoading } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const resp = await Axios.get("https://catfact.ninja/fact");
      return resp.data; // Return the data
    },
  });
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return <div>This is home page ---{data?.fact}</div>;
  //<div>This is Home PAge and user is {username}</div>;
}
export default Home;
