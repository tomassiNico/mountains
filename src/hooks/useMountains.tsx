import { useState, useEffect } from "react";
import {
  Mountain,
  fetchMountains as fetchMountainsApi,
} from "../services/notionApi";

const useMountains = () => {
  const [mountains, setMountains] = useState<Mountain[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [morePages, setMorePages] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true)


  useEffect(() => {
    setLoading(true);
    const fetchMountains = async () => {
      const mountainsList = await fetchMountainsApi();
      if (!mountainsList) {
        return;
      }
      if(pageSize >= mountainsList.length){
        setMorePages(false);
      }
      // TODO: should be paginated in backend
      setMountains(mountainsList.slice(0, pageSize));
      setLoading(false);
    };

    fetchMountains();
  }, [pageSize]);

  const fetchMore: () => void = () => {
    setPageSize((prevPageSize) => prevPageSize + 10);
  };

  return { mountains, fetchMore, morePages, loading };
};

export default useMountains;
