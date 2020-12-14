import React from "react";

const EditPost = props => {
    return (
        <>
            <form>
                <h1>Edit Post</h1>
                <input
                    type="text" 
                    placeholder="title"
                    defaultValue={props.title} 
                    onChange={props.savePostTitleToState}
                    size="39" 
                    required
                >
                </input>
                <br />
                <br />
                <textarea
                    defaultValue={props.content}
                    onChange={props.savePostContentToState}
                    placeholder="content"
                    rows="8" 
                    cols="41" 
                    required
                >
                </textarea>
                <br />
                <br />
                <button onClick={props.updatePost}>Update Post</button>
            </form>
        </>
    );
};

export default EditPost;