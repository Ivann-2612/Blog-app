import React from 'react'
import Sidebar from '../Sidebar'
import { useState, useEffect } from 'react'
import { getAllPosts } from './service'
import { CgMenuLeftAlt } from 'react-icons/cg'

const NewsList = () => {
    const [articles,setArticles] = useState([])
    const [visible,setVisible] = useState(5)
    const [search,setSearch] = useState('')
    const [showNav, setShowNav] = useState(true)

    const showMoreBlogs = () => {
        setVisible(prev => prev + 5)
    }
    
    useEffect(() => {
        getAllPosts().then(res => {
           // console.log(res.data)
            setArticles(res.data)
        })
    },[])
    


    return (
        <>
   
        
        <div>
            <input className='input-search' type='search' placeholder='Search title...' onChange={(e) => {setSearch(e.target.value)}} />
            <Sidebar show={showNav} />
            <header>
          <CgMenuLeftAlt className='giHam' onClick={() => {setShowNav(!showNav)}} />
          <p>BLOG<span>man</span></p>
        </header>
            <h5 className='main-title'>New Blogs</h5>
            {
               articles.filter((value) => {
                   if(search === '') {
                      return value
                   }else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                       return value
                   }  else {
                    return    
                   }
                               
               }).slice(0,visible).map(article => {
                   return(
                       <div key={article.id} className='mainDiv'>
                           <h5>{article.title}</h5>
                           <img src={article.image} alt={'New'} />
                           <p>{article.description}</p>
                           <p style={{color:'#fecc2c'}}>{article.date}</p>
                       </div>
                   )
               })  
            }
            <button className='load-more' onClick={showMoreBlogs}>Load more...</button>
        </div>
        
        
        </>
    )
}

export default NewsList