import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import AboutPage from '../components/AboutPage'
import NavBar from "../components/NavBar";

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <NavBar/>
            <Route exact path="/" component={HomePage} />
            <Route path='/about' component={AboutPage} />
        </Router>
    </Provider>
)

export default Root