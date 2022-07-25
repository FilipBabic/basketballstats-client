import './App.css';
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//PAGES
import Home from './pages/home';
import Login from './pages/login';
// import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import EditProfile from './pages/editprofile';
import LeagueStats from './pages/leaguestats';
import FilipResume from './pages/filipresume';
import LeaguePreview from './pages/leaguepreview';
import TeamPreview from './pages/teampreview';
//COMPONENTS
import Navbar from './components/Navbar';
import ResumeNavbar from './components/resumeComponents/Navbar/ResumeNavbar'
import AuthRoute from './customRoutes/AuthRoute';
import ArrangeGame from './components/basketballComponents/ArrangeGame/ArrangeGame';
import PlayGame from './components/basketballComponents/PlayGame/PlayGame';
//import ResumeAuthRoute from './customRoutes/ResumeAuthRoute';


const AppNavbarRoute = ({ exact, path, component: Component, ...rest }) => {
  return <Route exact={exact} path={path} {...rest} render={(routeProps) => {
    return <><Navbar {...routeProps} /><Component {...routeProps} /></>
  }}
  />
}
const AppNavbarRoute2 = ({ exact, path, component: Component, ...rest }) => {
  return <Route exact={exact} path={path} {...rest} render={(routeProps) => {
    return <><ResumeNavbar {...routeProps} /><Component {...routeProps} /></>
  }}
  />
}
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <UserProvider>
            <AppNavbarRoute exact path="/" component={Home} />
            <AppNavbarRoute path="/login" component={Login} />
            {/* <AppNavbarRoute path="/signup" component={Signup} /> */}
            <AuthRoute
              path="/dashboard"
              component={Dashboard}
            />
            <AuthRoute
              path="/arrangegame"
              component={ArrangeGame}
            />
            <AuthRoute path="/utakmica/:gameID/:firstID/:secondID" component={PlayGame} />
            <AuthRoute
              path="/editprofile"
              component={EditProfile}
            />
            <AppNavbarRoute2
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
            <AppNavbarRoute path="/league/:leagueID" component={LeaguePreview} />
            <AppNavbarRoute path="/team/:teamID" component={TeamPreview} />
          </UserProvider>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;