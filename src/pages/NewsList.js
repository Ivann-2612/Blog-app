import React from 'react'
import { useState, useEffect } from 'react'
import { getAllPosts } from './service'


const NewsList = () => {
    const [articles,setArticles] = useState([])

    useEffect(() => {
        getAllPosts().then(res => {
            console.log(res.data)
            setArticles(res.data)
        })
    },[])

    return (
        <div>
            <h5 className='main-title'>New Posts</h5>
            {
               articles.map(article => {
                   return(
                       <div key={article.id} className='mainDiv'>
                           <h5>{article.title}</h5>
                           <img src={article.image} alt={'New'} />
                           <p>{article.description}</p>
                           <p>{article.date}</p>
                       </div>
                   )
               })  
            }
        </div>
    )
}

export default NewsList