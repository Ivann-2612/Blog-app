import { useState } from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import NewsList from './pages/NewsList'
import About from './pages/About'
import { CgMenuLeftAlt } from 'react-icons/cg'


 
function App() {
  const [showNav, setShowNav] = useState(false)
  
  return (
    <>
    <Router>
        <header>
          <CgMenuLeftAlt className='giHam' onClick={() => {setShowNav(!showNav)}} />
          <p>BLOG<span>man</span></p>
        </header>
         <Navbar show={showNav} />
        <div className='main'>
           <Route path='/'      exact={true} component = {NewsList} />
           <Route path='/about' exact={true} component = {About} />
        </div>
    </Router>        
    </>
  );
}

export default App;
