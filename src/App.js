import './App.css'
import NewsList from './pages/NewsList'
import Portfolio from './pages/Portfolio'
import WelcomePage from './pages/WelcomePage'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';




const App = () => {
  
  return (
    <>
    <Router>
    <div className='links'>
         <Link className='link1' to="/">Blogs</Link>
         <Link className='link2'  to='/portfolio'>Portfolio</Link>
    </div>
       
    <div className='main'>
      <div className='wrapper'>
      <Switch>
        <Route exact path="/" component={NewsList} />
        <Route path="/portfolio" component={Portfolio} />
        <Route render={() => <WelcomePage />} />
      </Switch>
      </div>
    </div>
  </Router>
    </>
  );
}

export default App;
      