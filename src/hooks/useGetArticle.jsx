import { useEffect, useState } from "react"
import { getAllArticle } from "../services/article.services"

export const useGetArticle =  () => {
    const [article, setArticle] = useState([])

    useEffect(() => {
        getAllArticle((data) => {
            setArticle(data)
        })
    }, [])

    return {article}
}