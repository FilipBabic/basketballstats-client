import './App.css';
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//PAGES
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import EditProfile from './pages/editprofile';
import LeagueStats from './pages/leaguestats';
import FilipResume from './pages/filipresume';
import LeaguePreview from './pages/leaguepreview';
//COMPONENTS
import Navbar from './components/Navbar';
import AuthRoute from './customRoutes/AuthRoute';
import ResumeAuthRoute from './customRoutes/ResumeAuthRoute';


const AppNavbarRoute = ({ exact, path, component: Component, ...rest }) => {
  return <Route exact={exact} path={path} {...rest} render={(routeProps) => {
    return <><Navbar {...routeProps} /><Component {...routeProps} /></>
  }}
  />
}
// PROJEKTE, SKILLS, WORK EXPERIENCE UPDEJTOVATI 
// LIKE, ULIKE CV DODATI
// DASHBOARD DODATI OSNOVNE FUNKCIJE

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <UserProvider>
            <AppNavbarRoute exact path="/" component={Home} />
            <AppNavbarRoute path="/login" component={Login} />
            <AppNavbarRoute path="/signup" component={Signup} />
            <AuthRoute
              path="/dashboard"
              component={Dashboard}
            />
            <AuthRoute
              path="/editprofile"
              component={EditProfile}
            />
            <ResumeAuthRoute
              path={[
                "/filipresume",
                "/skills",
                "/projects",
                "/education",
                "/courses",
                "/workexperience",
                "/personalskills",
                "/other"
              ]}
              component={FilipResume}
            />
            <AppNavbarRoute path="/leaguestats" component={LeagueStats} />
            <AppNavbarRoute path="/leagues/:leagueID" component={LeaguePreview} />
          </UserProvider>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;