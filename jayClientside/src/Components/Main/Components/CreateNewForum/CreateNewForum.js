import React, { Component } from 'react';
import api from '../../../../Constants/APIEndpoints/APIEndpoints';
import Errors from '../../../Errors/Errors';

/**
 * @class
 * @classdesc CreateNewForumName handles the creation of new forum name component
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


        });
    
    };

}

export default CreateNewForum;