import React, { useState, useRef } from 'react';
import Post from './Post';
import CreateNewPost from './CreateNewPost';
import EditPost from './EditPost';

const DisplayAllPosts = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);

    const getTitle = useRef();
    const getContent = useRef();

    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isEditPost, setIsEditPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");

    const savePostTitleToState = event => {
        setTitle(event.target.value);
    };

    const savePostContentToState = event => {
        setContent(event.target.value);
    };

    //Switch the isCreateNewPost value to true if it's false previously,
    //or switch the value to false if it's true previously 
    const toggleCreateNewPost =() => {
        setIsCreateNewPost(!isCreateNewPost);
    }
    
    //Switch the isEditPost value to true if it's false previously,
    //or switch the value to false if it's true previously
    const toggleEditPost = () => {
        setIsEditPost(!isEditPost);
    }

    //Save captured data that user inputs 
    const savePost = (event) => {
        //prevent the default refreshing behavior of HTML form when a user 
        //clicks on the submit button
        event.preventDefault();
        setAllPosts([...allPosts, {title, content}]);
        //Clear the title and content after data has saved 
        console.log(allPosts);
        //Clear the Title and Content input field values once a post has saved
        setTitle("");
        setContent("");
        getTitle.current.value="";
        getContent.current.value="";
        toggleCreateNewPost();
    };

    const editPost = id => {
        //save the post id that a user wants modify into the editPostId state
        setEditPostId(id);
        toggleEditPost();
    }
    
    const deletePost = id => {
        //A new array with the remaining post data that doesn't match 
        //with the id of the post that a user wants to delete
        const filteredPost = allPosts.filter(eachPost => {
            return eachPost.id != id;
        });
        setAllPosts(filteredPost);
    }

    const updatePost = (event) => {
        event.preventDefault();
        const updatedPost = allPosts.map(eachPost => {
            //Modify only the title and content of the post that a user wants to modify
            //using the post id, but still save the previous post title and post content
            //(in case the user wants to update the post without making any modifications) 
            if (eachPost.id == editPostId) {
                return {
                    ...eachPost,
                    title: title || eachPost.title,
                    content: content || eachPost.content
                };
            }
            return eachPost;
        });

        setAllPosts(updatedPost);
        toggleEditPost();
    };

    if(isCreateNewPost) {
        return (
            <>
                <CreateNewPost 
                    //save user input values for post title and post content to state variables 
                    savePostTitleToState = {savePostTitleToState}
                    savePostContentToState = {savePostContentToState}
                    getTitle={getTitle}
                    getContent={getContent}
                    savePost={savePost}
                />
            </>
        );
    }

    if (isEditPost) {
        const post = allPosts.find(post => {
            return post.id == editPostId;
        });
        return (
            <EditPost 
                title={post.title}
                content={post.content}
                updatePost={updatePost}
                //save user input values for post title and post content to state variables 
                savePostTitleToState={savePostTitleToState}
                savePostContentToState={savePostContentToState}
            />
        );
    }

    return (
        <>
          <h2>All Posts You've Created</h2>
          {!allPosts.length ? (
            <div>
              <h3>Sorry, no posts to be displayed yet!</h3>
            </div>
          ) : (
            allPosts.map(eachPost => {
              return (
                <Post
                  id={eachPost.id}
                  title={eachPost.title}
                  content={eachPost.content}
                  editPost={editPost}
                  deletePost={deletePost}
                />
              );
            })
          )}
          <br />
          <br />
          <button onClick={toggleCreateNewPost}>Create New Post</button>
        </>
      );

};

export default DisplayAllPosts;