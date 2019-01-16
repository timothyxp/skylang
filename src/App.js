import React, { Component } from 'react';
import Header from './components/Header/header.js';
import {Route} from 'react-router-dom';
import About from './components/About/about.js';
import Blog from './components/Blog/blog.js';
import Cost from './components/Cost/cost.js';
import Courses from './components/Courses/courses.js';
import Teachers from './components/Teachers/teachers.js';
import Test from './components/Test/test.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="App__Content">
                    <Route exact path='/' component={About}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/cost' component={Cost}/>
                    <Route path='/courses' component={Courses}/>
                    <Route path='/teachers' component={Teachers}/>
                    <Route path='/test' component={Test}/>
                </div>
            </div>
        );
    }
}

export default App;
