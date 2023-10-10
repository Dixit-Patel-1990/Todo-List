import { useEffect, useState } from "react";
import axios from "axios";

const GetRandomCityData = () => {

    const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://api.zippopotam.us/us/94536")
      .then((response) => setData(response.data));
  }, []);

 

  return (
    <>
      <h1 data-testid="country"> {data.country} </h1>
    </>
  );
};
export default GetRandomCityData;
