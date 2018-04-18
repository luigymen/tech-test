import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';

import Converter from './containers/Converter';
import About from './components/About';
import Contact from './components/Contact'

import Header from './components/Header';
import Footer from './components/Footer';

export default (
    <div className="mainContainer">
        <Header />
            <Switch>
                <Route exact path="/" component={Converter} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        <Footer />
    </div>
);