import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//importando componente GiftExpertApp
import GiftExpertAppComponent from './components/GiftExpertApp'
import 'animate.css'

ReactDOM.render(
  <React.StrictMode>
    <GiftExpertAppComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

