import axios from 'axios';
import React, {useState} from 'react';

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  async function load() {
    setLoading(true);
    try {
      const result = await axios.get(url)
    //console.log(result, url)
    setData(result.data);
    if(result?.data?.data){
      setData(result.data.data);
    }
    } catch (e) {
      setError(true);
      console.error(e)
    }
    setLoading(false);
  }

return {data, loading, error, load};
}

export default useFetchData;