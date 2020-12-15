import React, { Component } from 'react';
import api from '../../../../Constants/APIEndpoints/APIEndpoints';
import Errors from '../../../Errors/Errors';
import PropTypes from 'prop-types';

/**
 * @class
 * @classdesc CreateNewForum handles the creation of new forum name component
 */

class CreateNewForum extends Component {
    static propTypes = {
        setPage: PropTypes.func,
        setAuthToken: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state= {
            name: '',
            description: '',
            error: ''
        };

        this.fields = [
            {
                name: "Name",
                key: "name"
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
        const { name, description } = this.state;         
    
        const sendData = { name, description };

        const response = await fetch(api.base + api.handlers.forum, {
            method: "POST",
            body: JSON.stringify(sendData),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });

       // if (response.status >= 300) {
       //     const error = await response.text();
       //     this.setError(error);
       //     return;
       // }
        const authToken = response.headers.get("Authorization")
        localStorage.setItem("Authorization", authToken);
        //this.setError("");
        //this.props.setAuthToken(authToken);
        const user = await response.json();
        this.props.setUser(user);
    };

    //These two lines of comments might be needed for future use inside the render function
        //<Errors error={error} setError={this.setError} /> 
        //<button onClick={(e) => this.props.setPage(e, PageTypes.signedInMain)}>Submit</button>

    render() {
        const { name, description, error } = this.state;
        return <>
            <br />
            <div>Create a new forum</div>
            <br />

            <div>
                Instruction: Please enter the name and description for your new forum, and click on the 
                <strong> Submit</strong> button to submit your response. Use the <strong>Back to main </strong>
                button to go back to the main page. Congratulations, you've just successfully created your new forum 
                 now! 
            </div>
            <br />
            <form onSubmit={this.submitForum}>
                <div id="form_entry">
                    <span>Forum Name: </span>
                    <input name={"name"} value={name} onChange={this.setField} />
                </div>
                <div id="form_entry">
                    <span>Description: </span>
                    <input name={"description"} value={description} onChange={this.setField} />
                </div>
                <input type="submit" value="Submit" />
            </form>
            <br />
        </>
    }

}

export default CreateNewForum;