import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'

const App = () => (
    <BrowserRouter>
        <switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </switch>
    </BrowserRouter>
)
export default App