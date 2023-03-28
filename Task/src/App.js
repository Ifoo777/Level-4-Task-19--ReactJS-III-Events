import React,{useState} from 'react'
import './App.css';
import Header from './Header';
import About from './About';
import Profile from './Profile';
import Products from './Products';
import Legal from './Legal';
import Calculator from './Calculator';
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom';


const App = (props) => {

  // Declare the props
  const products = props.products;
  const user = props.user;
  // Set state for logged in to false
  const[login,setLogin] = useState(false);

  // Function display welcome if user is logged in
  function UserIsLoggedIn(){
    return <div className="welcomeBackDiv">
      <h2>Welcome back {user.name} {user.surname}</h2>
    </div>
  }
  
  // Request login if user is not logged in
  // onClick change state to logged in
  function UserIsNotLoggedIn(){
    return <div className="loginButtonDiv">
      <button className="loginButton" onClick={()=>{setLogin(true)}}>Click here to Login or Signup</button>
    </div>
  }
  
  // Based in if logged in or not, display login page or welcome page
  function Greeting(props){ 
    const login = props.login;
    if(login === true){
      return <UserIsLoggedIn/>;
    } else{
      return <UserIsNotLoggedIn/>;
    } 
  }

  // Display functions based on routing and state
  return(
    <Router>
      <Header/>
      <div>
        <Routes>

        <Route path="/" element = {login?<Greeting login = {true}/>:<Greeting login = {false}/>}/>
                
        <Route path="/shopping" element = {<Products products = {products}/>} />
        
        <Route path="/profile" element =  {<Profile user = {user}/>} />
         
        <Route path="/about" element = {<About/>} />
                   
        <Route path="/legal" element = {<Legal/>} />
          
        <Route path="/calculator" element = {<Calculator/>} />
       

        </Routes>
      </div>

    </Router>
  );
}

export default App;
