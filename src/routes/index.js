import React from "react";
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom'
import Home from '../pages/Home';

export default function Routes() {
    
    return (    
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/download' component={() => { 
                    window.location.href = "https://drive.google.com/file/d/1HhdTHVOmAZj6xBDE4AMcGkcifcf8RZ2J/view?usp=share_link";
                    return null;
                }} />
                <Route exact path='/linkedin' component={() => { 
                    window.location.href = "https://www.linkedin.com/in/imaxsilva/";
                    return null;
                }} />
                <Route exact path='/github' component={() => { 
                    window.location.href = "https://github.com/iMaxSilva";
                    return null;
                }} />
                <Route path='*' component={Home} />
            </Switch>
    );
}