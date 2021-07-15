import React from 'react'
import desktop from '../images/Asset 530.png'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {BsBootstrap} from 'react-icons/bs'
import {GrApple} from 'react-icons/gr'


const WelcomePage = () => {
    return (
        <div className='welcome-page'>
            <h3>This is my personal blog website.</h3>
            <h4>I am a fun of<GrApple className='apple' size="30px" color='orange' />products .</h4>
            <p>Blog about some useful tips from HTML, CSS, JAVASCRIPT AND REACT.</p>
           <div className='welcome-allSvg'>
           <SiHtml5 size="30px" color='orange' />
            <SiCss3 size="30px" color='orange' />
            <SiJavascript size="30px" color='orange' />
            <SiReact size="30px" color='orange' />
            <SiGithub size="30px" color='orange' />
            <SiTailwindcss size="30px" color='orange' />
            <BsBootstrap size="30px" color='orange' />
           </div>
           <img src={desktop} />
           <p className='copyright'><span style={{color:'cadetblue'}}>Ivan Nikolic &copy;</span><span style={{color:'orange'}}> 2021</span></p>
        </div>
    )
}

export default WelcomePage
