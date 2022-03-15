import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = useCallback(async () => {
    try {
      const {data: response} = await axios.get(url);
      setData(response);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {data, loading, error};
}
