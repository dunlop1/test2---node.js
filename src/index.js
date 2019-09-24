import React from 'react';
import store from './store/store';
import {  Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import DataForm from './components/itemForm';
import Header from './components/header';
import { connect } from 'react-redux';
import Myitems from './components/myitems';
 
ReactDOM.render(<Provider store={store}>
    <Header/>
    <Myitems/>
    <hr/>
    <DataForm/>
</Provider>, document.getElementById('root'));