import 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './Components/AppComponent';
import style from './styles/style.scss';
import {servicesText} from './Components/HOME/Services/ServicesText';

ReactDOM.render(<AppComponent/>, document.getElementById('app'));

servicesText();
