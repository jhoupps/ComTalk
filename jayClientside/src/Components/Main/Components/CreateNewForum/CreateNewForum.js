import React, { Component } from 'react';
import api from '../../../../Constants/APIEndpoints/APIEndpoints';
import Errors from '../../../Errors/Errors';
import PageTypes from '../../../../Constants/PageTypes/PageTypes';

/**
 * @class
 * @classdesc CreateNewForum handles the creation of new forum name component
 */

class CreateNewForum extends Component {

    constructor(props) {
        super(props);

        this.state= {
            forumName: '',
            description: '',
            error: ''
        };

        this.fields = [
            {
                name: "Forum Name",
                key: "forumName"
            },
            {
                name: "Description",
                key: "description"
            }
        ]
    }

    /**
     * @description setField will set the field for the provided argument
     */
    setField = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    /**
     * @description setError sets the error message
     */
    setError = (error) => {
        this.setState({ error })
    }

    /**
     * @description submitForm handles the form submission
     */
    submitForum = async (e) => {
        e.preventDefault();
        const { forumName, description } = this.state;         
    
        const sendData = { forumName, description };

        const response = await fetch(api.base + api.handlers.forum, {
            method: "POST",
            body: JSON.stringify(sendData),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });

        if (response.status >= 300) {
            const error = await response.text();
            this.setError(error);
            return;
        }
        const authToken = response.headers.get("Authorization")
        localStorage.setItem("Authorization", authToken);
        this.setError("");
        this.props.setAuthToken(authToken);
        const user = await response.json();
        this.props.setUser(user);
    };

    render() {
        const { forumName, description, error } = this.state;
        return <>
            <Errors error={error} setError={this.setError} />

            <div>Enter a new forum</div>
            <br />
            <form onSubmit={this.submitForum}>
                <div>
                    <span>Forum Name: </span>
                    <input name={"forumName"} value={forumName} onChange={this.setField} />
                </div>
                <div>
                    <span>Description: </span>
                    <input name={"description"} value={description} onChange={this.setField} />
                </div>
            </form>
            <button onClick={(e) => this.props.setPage(e, PageTypes.signedInMain)}>Submit</button>
            <br />
        </>
    }

}

export default CreateNewForum;