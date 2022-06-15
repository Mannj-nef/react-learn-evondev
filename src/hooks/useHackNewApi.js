import { useEffect, useRef, useState } from "react";
import { getApi } from "../api/api";

export default function useHackNewApi(initUrl, initDara) {
  const [data, setData] = useState(initDara);
  const [loading, setLoading] = useState(true);

  const handleCallAPi = useRef();
  const isMounted = useRef(true);

  const enpoint = initUrl;

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    handleCallAPi.current();
  }, [enpoint]);

  handleCallAPi.current = async () => {
    try {
      setLoading(true);
      const response = await getApi(enpoint);
      if (isMounted.current) {
        setData(response || []);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { data, loading };
}
