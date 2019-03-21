import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class extends Component {
    state = {}
    render() {
        return (
            <div>
                <Link to="/">Home</Link> <Link to='/create'>Add User</Link>
            </div>
        )
    }
}