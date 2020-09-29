import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
        </Router>
    </Provider>
)

export default Root