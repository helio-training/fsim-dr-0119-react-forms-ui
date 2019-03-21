import React, { Component } from 'react'
import {apiURL} from '../config/coms'
import { WSAECONNREFUSED } from 'constants';

// API Connection / fetch()
// List of Users in Simple format
export default class extends Component {
    state = {
        users: []
    }

    getUsers = async () => {
        await fetch(`${apiURL}/users`)
            .then( res => res.json())
            .then( data => data.map( user => <h5>{user.displayName}</h5>))
            .then( users => this.setState({ users }))
            .catch( err => console.log(err))
    }

    componentDidMount(){
        this.getUsers()
    }

    render() {
        return (
            <div>
                <h3>List of Users</h3>
                <div id='list'>
                    {this.state.users}
                </div>
            </div>
        )
    }
}