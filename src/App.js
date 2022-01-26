import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import AuthProvider from './pages/Context/AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Diamond from './pages/Diamond/Diamond';
import Gold from './pages/Gold/Gold';
import Home from './pages/Home/Home/Home';
import SignIn from './pages/Login/SignIn/SignIn';
import SignUp from './pages/Login/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/shop">
              <Shop></Shop>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/gold">
              <Gold></Gold>
            </Route>
            <Route path="/diamond">
              <Diamond></Diamond>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/signIn">
              <SignIn></SignIn>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
