import axios from "axios"

export const getAllArticle = async (callback) => {
    try {
        const res = await axios.get(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=PgzOkI7cz0qoQnidmZwCurfcpaWIYIcl`
        )
        callback(res.data.response.docs)
    } catch (error) {
        console.log(error)
    }
}