import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
//PAGES
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import LeagueStats from './pages/leaguestats';
import FilipResume from './pages/filipresume';
//COMPONENTS
import Navbar from './components/Navbar';
import ResumeNavbar from './components/resumeComponents/Navbar/ResumeNavbar';
import AuthRoute from './util/AuthRoute';
let authenticated;
const token = localStorage.FBidToken;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href = '/login';
    authenticated = false;
  }else {
    authenticated = true;
  }
}else{
  authenticated = false;
}
const AppNavbarRoute = ({exact, path, component:Component, ...rest}) => {
  return <Route exact={exact} path={path} {...rest} render={(routeProps) => {
    return <><Navbar {...routeProps}/><Component {...routeProps}/></>
  }}
  />
}
const ResumeNavbarRoute = ({exact, path, component:Component, ...rest}) => {
  return <Route exact={exact} path={path} {...rest} render={(routeProps) => {
    return <><ResumeNavbar {...routeProps}/><Component {...routeProps}/></>
  }}
  />
}
const App = () => {
  return (
      <BrowserRouter>     
        <Switch>
          <AppNavbarRoute exact path="/" component={Home} />
          <AuthRoute path="/login" component={Login} authenticated={authenticated}/>
          <AuthRoute path="/signup" component={Signup} authenticated={authenticated}/>
          <AppNavbarRoute path="/dashboard" component={Dashboard} />
          <ResumeNavbarRoute path={["/filipresume", "/skills", "/projects"]} component={FilipResume} />
          <AppNavbarRoute path="/leaguestats" component={LeagueStats} />
        </Switch>
      </BrowserRouter> 
  );
}

export default App;
