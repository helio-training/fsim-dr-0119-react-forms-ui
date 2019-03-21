import React, { Component, Fragment } from 'react'
import { Route } from "react-router-dom";
import Home from './Home'
import AddUser from './AddUser'

export default class extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/create" component={AddUser} />
            </Fragment>
        )
    }
}