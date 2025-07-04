import { useState, useEffect } from "react";
import axios from "axios";

export default function useCommentsData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
      } catch (err) {
        setError("Failed to load comments. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, loading, error };
}
