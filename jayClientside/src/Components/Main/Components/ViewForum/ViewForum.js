import React, { useState, useEffect } from 'react';
import PageTypes from '../../../../Constants/PageTypes/PageTypes';
import api from '../../../../Constants/APIEndpoints/APIEndpoints';


function getGithubOrgs(url) {
    return fetch(url, {
        method: "GET",
        headers: new Headers({
            "Authorization": localStorage.getItem("Authorization")
        })
    }).then((response) => response.json());
}


class ViewForumClass extends React.Component {
    constructor(props) {
        (props);
        this.channels = {res: []}
    }

    componentDidMount = ({ user, setPage }) => {
        const [avatar, setForumList] = useState(null)
        async function fetchForumList() {
            const response = await fetch(api.base + api.handlers.specificForum + "/" + "5fd881adfe2d961658a7cec8", {
                method: "GET",
                headers: new Headers({
                    "Authorization": localStorage.getItem("Authorization")
                })
            });
            if (response.status >= 300) {
                // const error = await response.text();
                //setForumList(user.photoURL)
                return;
            }
            const forumjson = await response.json();
            console.log(forumjson[0]);
            //console.log(forumjson[0].name);
            getGithubOrgs(api.base + api.handlers.specificForum).then((res) =>
                this.setState({res:res})
            );
        }
    }
    
    // res[0].posts[i]
    }
    render() {
        return(
            <div>
                <div><h2>{this.res[0].name}</h2></div>
                <div>
                    <div id="posts">
                        <p>There's some posts here, it's a general forum.</p>
                        <div id="rendered_messages"> 
                            {this.state.res[0].posts.map((post) => {
                                return (
                                    <div id="post"> 
                                        <div id="username">
                                            <p>post.username</p>
                                        </div>
                                        <div id="timestamp">
                                            <p>post.timestamp</p>
                                        </div>
                                        <div id="mesage">
                                            <p>post</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                
                <div>
                    <label for="new_message"></label>
                    <textarea id="new_message"></textarea>
                    <button aria-label="Send">Send</button>
                </div>
            </div>
        )
    }
}



export default ViewForumClass;