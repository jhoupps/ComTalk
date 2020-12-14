import React, { Component } from 'react';

const CreateNewPost = props => {
    return (
        <>
        <form onSubmit={props.savePost}>
            <h1>Create New Post</h1>
            <input 
                type="text" 
                placeholder="title" 
                size="39" 
                onChange={props.savePostTiteToState}
                required
                //locate the Title input field on the DOM
                ref={props.getTitle}
            >
            </input>
            <br />
            <br /> 
            <textarea 
                placeholder="content" 
                row="8" 
                cols="41" 
                onChange={props.savePostContentToState}
                required
                //locate the Content input field on the DOM
                ref={props.getContent}
            >
            </textarea>
            <br />
            <br />
            <button>Save Post</button>
        </form>
        </>

    );
};

export default CreateNewPost;