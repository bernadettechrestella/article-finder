import axios from "axios"

// export const getAllArticle = async (callback) => {
//     try {
//         const res = await axios.get(
//             `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=PgzOkI7cz0qoQnidmZwCurfcpaWIYIcl`
//         )
//         callback(res.data.response.docs)
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getAllArticle = async (callback, options = {}) => {
    try {
        const { beginDate, endDate, facet, facetFields, facetFilter, fl, fq, page, q, sort } = options

        let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`

        if (beginDate) {
            url += `begin_date=${beginDate}&`
        }
        if (endDate) {
            url += `end_date=${endDate}&`
        }
        if (facet) {
            url += `facet=${facet}&`
        }
        if (facetFields) {
            url += `facet_fields=${facetFields}&`
        }
        if (facetFilter) {
            url += `facet_filter=${facetFilter}&`
        }
        if (fl) {
            url += `fl=${fl}&`
        }
        if (fq) {
            url += `fq=${fq}&`
        }
        if (page) {
            url += `page=${page}&`
        }
        if (q) {
            url += `q=${q}&`
        }
        if (sort) {
            url += `sort=${sort}&`
        }

        url += `api-key=PgzOkI7cz0qoQnidmZwCurfcpaWIYIcl`

        const res = await axios.get(url)
        console.log(url)
        callback(res.data.response.docs)
    } catch (error) {
        console.log(error)
    }
}