import React, { Component } from 'react'
import {apiURL} from '../config/coms'
import { Redirect } from 'react-router-dom'

// API Connection / fetch()
// Input in Forms
// Submit Workflow
export default class extends Component {
    state = {
        redirect : false,
        username: '',
        password: '',
        displayName: '',
        email: ''
    }

    createUser = async (user) => {
        await fetch(`${apiURL}/users`, {
            method: 'post',
            body: JSON.stringify(user)
        }).then( res => res.json() )
        .then( data => console.log(data))
        .catch( err => console.log(err))
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const user = { 
            username: this.state.username,
            password: this.state.password,
            displayName: this.state.displayName,
            email: this.state.email
        }
        await this.createUser(user)
        this.setState({redirect:true})
    }

    handleChange = (event) => {
        this.setState(
            { [event.target.name] : event.target.value }
        )
    }

    render() {
        return (
            <fieldset>
                <legend>Add User</legend>
                <form onSubmit={this.handleSubmit}>
                    <input name='username'
                        type='text' 
                        placeholder='UserName' 
                        value={this.state.username}
                        onChange={this.handleChange}/>
                    <input name='password'
                        type='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange} />
                    <input name='displayName'
                        type='text'
                        placeholder='Display Name'
                        value={this.state.displayName}
                        onChange={this.handleChange} />
                    <input name='email'
                        type='email'
                        placeholder='Email Address'
                        value={this.state.email}
                        onChange={this.handleChange} />
                    <input type='submit'/>
                </form>
                { this.state.redirect ? <Redirect to='/'/> : null}
            </fieldset>
        )
    }
}