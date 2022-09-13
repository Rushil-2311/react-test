import { useEffect, useState } from "react";
import axios from "axios";
import { Todos } from "../types/interface/dashboard";
const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<Array<Todos> | []>([]);
  const [serverError, setServerError] = useState<null | string>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error: any) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, apiData, serverError };
};

export default useFetch;
