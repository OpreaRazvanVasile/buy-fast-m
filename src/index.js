import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/user-context/user.context';
import { CategoriesProvider } from './contexts/categories-context/categories.contex';
import {CartProvaider} from './contexts/cart-context/cart-context';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripePromise } from './utils/fierbase/stripe/stripe.utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <UserProvider>
    <CategoriesProvider>
        <CartProvaider>
          <Elements stripe={loadStripePromise}>
       
        <App />
        </Elements>
     

        </CartProvaider>
    

        </CategoriesProvider>
      
       </UserProvider>
   
    
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
