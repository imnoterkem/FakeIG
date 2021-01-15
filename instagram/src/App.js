import React from 'react'
import './app.scss';
import 'materialize-css/dist/css/materialize.min.css'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from './components/header'
import Login from './components/login'
import SignUp from "./components/signup";
import Post from './components/post'

function App() {


  return (
    <>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/'>
            <Navbar />
            <Post 
              avatarUrl="https://images.unsplash.com/photo-1610716129323-6ae2e194d05b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              postedUser='John'
              imgUrls={["https://images.unsplash.com/photo-1610660687216-077c7703e45e?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
              "https://images.unsplash.com/photo-1610573502532-90b9dd7eafd8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"]}
              dateTime=""
            />
            <Post 
              avatarUrl="https://images.unsplash.com/photo-1610716129323-6ae2e194d05b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              postedUser='John'
              imgUrls={["https://images.unsplash.com/photo-1610716129323-6ae2e194d05b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"]}
              dateTime=""
            />
          </Route>    
        </Switch>
      </Router>
    </>
  );
}

export default App;
