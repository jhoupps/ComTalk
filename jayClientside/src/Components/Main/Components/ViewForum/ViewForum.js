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

    ViewForum = ({ user, setPage }) => {
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
                this.res = res
            );
        }
        /*
        useEffect(() => {
            fetchForumList();
            return;
        }, []);
        */
        render() {
            return(
                <div>
                    <div><h2>{this.res[0].name}</h2></div>
                    <div>
                        <div id="posts">There's some posts here, it's a general forum.</div>
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
}



export default ViewForum;