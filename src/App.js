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
import Shop from './pages/Shop/Shop/Shop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Home></Home>
              <Footer />
            </Route>
            <Route path="/home">
              <Header />
              <Home></Home>
              <Footer />
            </Route>
            <PrivateRoute path="/shop">
              <Header />
              <Shop></Shop>
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/gold">
              <Header />
              <Gold></Gold>
              <Footer />
            </Route>
            <Route path="/diamond">
              <Header />
              <Diamond></Diamond>
              <Footer />
            </Route>
            <Route path="/about">
              <Header />
              <About></About>
              <Footer />
            </Route>
            <Route path="/signIn">
              <Header />
              <SignIn></SignIn>
              <Footer />
            </Route>
            <Route path="/signUp">
              <Header />
              <SignUp></SignUp>
              <Footer />
            </Route>
            <Route path="*">
              <Header />
              <NotFound></NotFound>
              <Footer />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
