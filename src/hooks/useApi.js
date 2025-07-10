import axios from "axios";
import { useEffect, useState } from "react"



export const useApi = (apiUrl, params) => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(apiUrl, {
        params: params
      });
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setErr(err.message);
      setLoad(false);
    }

  }


  useEffect(() => {
    getData();
  }, [])


  return [load, data, err];




}