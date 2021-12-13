import axios from 'axios'


// const BLOG = 'https://ivans-blog.herokuapp.com/api/posts/'

// export const getAllPosts = () =>  {
//     return axios.get(BLOG)
// }

export const getAllPosts = async () => {
    const {data} = await axios.get('https://ivans-blog.herokuapp.com/api/posts/')
    //console.log(data)
    return data
}