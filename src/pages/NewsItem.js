import React from 'react'


const NewsItem = ({title,description,url,urlToImage,publishedAt,author}) => {
    return (
       
        <div>
            <img src={urlToImage} alt={'New'} />
            <h3>{author}</h3>
            <p><b>{publishedAt}</b></p>
            <h3><a href={url} >{title}</a></h3>
            <p>{description}</p>
        </div> 
    )
}

export default NewsItem