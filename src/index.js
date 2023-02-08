import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Stollar from './components/Stollar/Stollar';
import Stol from './components/Stol/Stol';
import Oshpaz from './components/Oshpaz/Oshpaz';
import Taomlar from './components/Stol/Taomlar/Taomlar'
import Ichimliklar from './components/Stol/Ichimliklar/Ichimliklar';
import Salatlar from './components/Stol/Salatlar/Salatlar'
import {store} from './store/store'
import {Provider} from 'react-redux'
import Login from './components/Login/Login';
import Korzinka from './components/Korzinka.js/Korzinka';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>}/>
      <Route path='/oshpaz' element={<Oshpaz/>}/>
      <Route path='/stollar' element={<Stollar/>}/>
      <Route path='/korzinka' element={<Korzinka/>}/>
      <Route path='/' element={<App/>}>
        <Route path='/taomlar' element={<Taomlar/>}/>
        <Route path='/ichimliklar' element={<Ichimliklar/>}/>
        <Route path='/salatlar' element={<Salatlar/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
