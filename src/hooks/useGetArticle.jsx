import { useEffect, useState } from "react"
import { getAllArticle } from "../services/article.services"

export const useGetArticle =  (options = {}) => {
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)
    const [statusCode, setStatusCode] = useState(null)
    const [hits, setHits] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await getAllArticle((data, statusCode, meta) => {
                    setArticle(data);
                    setStatusCode(statusCode);
                    setHits(meta.hits);
                    setLoading(false);
                }, options);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
    }, [options]);

    return {article, loading, statusCode, hits}
}