import axios from 'axios'


const BLOG = 'https://ivans-blog.herokuapp.com/api/posts/'

export const getAllPosts = () =>  {
    return axios.get(BLOG)
}