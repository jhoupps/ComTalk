import React, { useState, useEffect } from 'react';
import PageTypes from '../../../../Constants/PageTypes/PageTypes';
import './Styles/MainPageContent.css';
import api from '../../../../Constants/APIEndpoints/APIEndpoints';

const MainPageContent = ({ user, setPage }) => {
    const [avatar, setForumList] = useState(null)

    //JAY INTENDS TO BE WORKING ON THIS FILE
    async function fetchForumList() {
        const response = await fetch(api.base + api.handlers.forum, {
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
        //WANYU - DO THINGS WITH the repsonse
        const forumjson = await response.json();
        console.log(forumjson);
    }

    useEffect(() => {
        fetchForumList();
        return;
    }, []);

    return <>
        <main>
			<div>
                <div><h2>Your Subscribed Channels</h2> </div>


				<div id="subscribed_channels">
                    There will be a list of buttons representing subscribed channels here once Jay can call endpoints
                    <div><button onClick={(e) => { setPage(e, PageTypes.viewForum) }}>View a Forum (Broken)</button></div>

                </div>

                <div><button onClick={(e) => { setPage(e, PageTypes.createNewForum) }}>New Forum</button></div>
			</div>
	</main>
    </>

//THE BUTTON UP THERE IS LINKED TO THE WRONG PAGE
    /* previous return statement
            return <>
        <div>Welcome to my application, {user.firstName} {user.lastName}</div>

        {avatar && <img className={"avatar"} src={avatar} alt={`${user.firstName}'s avatar`} />}
        <div><button onClick={(e) => { setPage(e, PageTypes.signedInUpdateName) }}>Update name</button></div>
        <div><button onClick={(e) => { setPage(e, PageTypes.signedInUpdateAvatar) }}>Update avatar</button></div>
    </>
    */

}

export default MainPageContent;