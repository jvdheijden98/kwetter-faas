import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import StartPage from './pages/StartPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NavigationBar from './components/navigation/NavigationBar';
import NavigationDrawer from './components/navigation/NavigationDrawer';

function App() {
  return (    
    <Router>
      <div data-testid="testId" className="App"> 
      <NavigationBar/>
      <NavigationDrawer/>

      <Switch>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/">
        <Redirect to="/home"/>
      </Route>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/register" component={RegisterPage}/>
      <Route exact path="/overview" component={StartPage}/>
      <Route exact path="/profile/:username" component={ProfilePage}/>
      </Switch>

      </div>
    </Router>        
  );
}

export default App;
