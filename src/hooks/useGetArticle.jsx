import { useEffect, useState } from "react"
import { getAllArticle } from "../services/article.services"

export const useGetArticle =  (options = {}) => {
    const [article, setArticle] = useState([])

    useEffect(() => {
        getAllArticle((data) => {
            setArticle(data)
        })
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllArticle((docs) => {
                    setArticle(docs);
                }, options);
                console.log(options)
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
    }, [options]);

    return {article}
}