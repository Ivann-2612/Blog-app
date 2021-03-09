import axios from 'axios'

const SERBIA = 'https://newsapi.org/v2/top-headlines?country=rs&apiKey=ac157cacb088432180276283ed13c3c9'

export const getSerbiaNews = () =>  {
    return axios.get(SERBIA)
}