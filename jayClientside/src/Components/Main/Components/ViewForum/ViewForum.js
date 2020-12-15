import React, { useState, useEffect } from 'react';
import PageTypes from '../../../../Constants/PageTypes/PageTypes';
import api from '../../../../Constants/APIEndpoints/APIEndpoints';


const ViewForum = ({ user, setPage }) => {
    const [avatar, setForumList] = useState(null)

    //JAY INTENDS TO BE WORKING ON THIS FILE
    //I MOSTLY JUST COPIED THIS FROM THE MAINPAGECONTENT.JS
    async function fetchForumList() {
        //HARDCODED 1 UNTIL I CAN PASS A VALUE VIA BUTTON
        const response = await fetch(api.base + api.handlers.specificForum + "1", {
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
        console.log(forumjson);
    }

    useEffect(() => {
        fetchForumList();
        return;
    }, []);

    return <>
        <main>
			<div>
                <div><h2>Channel Name (TODO)</h2> </div>
				<div id="posts">There's some posts here, it's a general forum.</div>
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

export default ViewForum;