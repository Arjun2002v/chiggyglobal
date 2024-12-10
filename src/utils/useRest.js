import { useEffect, useState } from "react";
import API_URL from "./Api";

const useRest = (resID) => {
  const [resData, setResData] = useState(null);
  const API_URL = API_URL;

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch(API_URL + resID);
      const data = await res.json();
      setResData(data.data);
    };
    fetching();
  }, []);
};
export default useRest;
