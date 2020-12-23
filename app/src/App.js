import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Auth from './components/auth/auth';
import Home from './components/home/Home';
import './assets/sass/styles.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Auth}/>
          <Route path='/Home' component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
