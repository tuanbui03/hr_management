import { useState, useEffect } from "react";
import { callApi } from "../services/api";

export const useFetchApi = (url, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await callApi('get', url, params);
        console.log(res);
        
        if (res?.status === 200) {
          setData(res?.data?.metadata?.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading };
};

