import React from 'react'
import { useState, useEffect } from 'react'
import { getSerbiaNews } from './service'


const NewsList = () => {
    const [articles,setArticles] = useState([])


    useEffect(() => {
        getSerbiaNews().then(res => {
           console.log(res.data)
            setArticles(res.data.articles)
        })
      
    },[])

    return (
        <div>
            <h5 className='main-title'>Serbian News</h5>
            {
               articles.map(article => {
                   return(
                       <div key={article.urlToImage} className='mainDiv'>
                           <h5>{article.author}</h5>
                           <img src={article.urlToImage} alt={'New'} />
                           <p><a href={article.url} >{article.title}</a></p>
                           <p>{article.description}</p>
                       </div>
                   )
               })  
            }
        </div>
    )
}

export default NewsList