import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import Social from './components/Social';
import User from './components/User';
import Skills from './components/Skills';
import './components/User.css';
import './components/Social.css';
import Header from './Header';

function App() {
  return (
    <div className="app container-fluid homepage-slider-container">
      <div className='wrapper'>
        <Header/>
        <Router>
          <Switch>
            <Route path="/website" component={User} />
            <Route path="/social" component={Social} />
            <Route path="/skills" component={Skills} />
          </Switch>
          <Menu/> 
        </Router>
      </div>
    </div>
  );
}

export default App;
