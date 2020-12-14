import React from 'react';

const Post = ({ id, title, content, editPost, deletePost }) => {
    return (
        <>
            <section>
                <h3>{title}</h3>
                <p>{content}</p>
                <button onClick={() => editPost(id)}>Edit</button>
                <button onClick={() => deletePost(id)}>Delete</button>
            </section>
        </>
    );
};

export default Post;