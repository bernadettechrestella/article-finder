import { useEffect, useState } from "react"
import { getAllArticle } from "../services/article.services"

export const useGetArticle =  (options = {}) => {
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getAllArticle((data) => {
            setArticle(data)
        })
        setLoading(false)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getAllArticle((docs) => {
                    setArticle(docs);
                }, options);
                setLoading(false);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
    }, [options]);

    return {article, loading}
}