import React from 'react'
import Sidebar from '../Sidebar'
import { useState, useEffect } from 'react'
import { getAllPosts } from './service'
import { CgMenuLeftAlt } from 'react-icons/cg'

const NewsList = () => {
    const [articles,setArticles] = useState([])
    const [visible,setVisible] = useState(6)
    const [search,setSearch] = useState('')
    const [showNav, setShowNav] = useState(true)

    const showMoreBlogs = () => {
        setVisible(prev => prev + 2)
    }
    
    useEffect(() => {
        getAllPosts().then(res => {
           //console.log(res)
            setArticles(res)
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
            <div className='content'>
            {
               articles?.filter((value) => {
                   if(search === '') {
                      return value
                   }else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                       return value
                   }  else {
                    return    
                   }
                               
               }).slice(0,visible).map(article => {
                   return(
                       <div key={article?.id} className='mainDiv'>
                           <h5>{article?.title}</h5>
                           <img src={article?.image} alt={'New'} />
                           <p>{article?.description}</p>
                           <span style={{color:'#fecc2c'}}>{article?.date}</span>
                       </div>
                   )
               })  
            }
            </div>
            
            <button className='load-more' onClick={showMoreBlogs}>Load more...</button>
        </div>
        
        
        </>
    )
}

export default NewsList