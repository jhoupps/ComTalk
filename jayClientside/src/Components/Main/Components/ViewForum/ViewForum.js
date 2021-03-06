import React, { useState, useEffect } from 'react';
import PageTypes from '../../../../Constants/PageTypes/PageTypes';
import api from '../../../../Constants/APIEndpoints/APIEndpoints';

/*
function getGithubOrgs(url) {
    return fetch(url, {
        method: "GET",
        headers: new Headers({
            "Authorization": localStorage.getItem("Authorization")
        })
    }).then((response) => response.json());
}
*/

var res;
/*
const ViewForum extends React.Component {
    constructor(props) {
        super(props);
        this.channels = {res: []}
    }
*/

const ViewForum = ({ user, setPage }) => {
    //const [avatar, setForumList] = useState(null)


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
        /*
        getGithubOrgs(api.base + api.handlers.specificForum).then((new_res) =>
            res = new_res
        );
        */
    }
    return <>
        <div>
            <div><h2>Hiking for the Win!</h2></div>
            <div>
                <div id="posts">
                    <div id="rendered_messages">
                        <div id="post"> 
                            <div id="username">
                                <p>John Doe</p>
                            </div>
                            <div id="timestamp">
                                <p>10/7/2020 5:00 pm</p>
                            </div>
                            <div id="mesage">
                                <p>Hey! Does anyone want to go on a hike in the PNW?</p>
                            </div>
                        </div>
                        <div id="post"> 
                            <div id="username">
                                <p>Jill Donovan</p>
                            </div>
                            <div id="timestamp">
                                <p>10/7/2020 7:12 pm</p>
                            </div>
                            <div id="mesage">
                                <p>Hiya! I am so down! Saturday? PS. Our initials match *Heart*!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="new_message_container">
                <label for="new_message"></label>
                <textarea id="new_message"></textarea>
                <button aria-label="Send">Send</button>
            </div>
        </div>
    </>
}

export default ViewForum;