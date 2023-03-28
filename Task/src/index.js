import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Product array to be used as props

const products = [
  {item:'One piece suit - Grey' , price: 10000, photo:('./images/suit.jpg'), id:1},
  {item:'Premium Shoes', price: 5000, photo:require('./images/shoes.jpg' ), id:2},
  {item:'Designer Shirt – Brown shirt', price: 3250, photo:require('./images/shirt.jpg' ), id:3}

];

// Properties of the user
const user = {
  name: 'Irfaan',
  surname: 'Osman',
  date_of_birth : '1994/05/18', 
  address: '134 Marwah Street, Pretoria, Erasmia', 
  country: 'South Africa', 
  email: 'ossygt3@123mail.com', 
  telephone: '0116253322', 
  company: 'Tech Company',
  profileImg: require( './images/photo.jpg'),
  shopping_cart: ['HP', 'LENOVO', 'ACER', 'DELL']
};

/* Render in page */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<App products={products} user={user}/>


  </React.StrictMode>
);

reportWebVitals();
