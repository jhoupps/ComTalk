import React, { useState, useEffect } from 'react';
import PageTypes from '../../../../Constants/PageTypes/PageTypes';
import './Styles/MainPageContent.css';
import api from '../../../../Constants/APIEndpoints/APIEndpoints';

const MainPageContent = ({ user, setPage }) => {
    const [name, setForumName] = useState(null)
    const [name2, setForumName2] = useState(null)
    const [name3, setForumName3] = useState(null)  
    const [name4, setForumName4] = useState(null)  
    const [name5, setForumName5] = useState(null)

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
        console.log("I am in the mainpage content")
        const forumjson = await response.json();
        console.log(forumjson);
        console.log(forumjson[0]);
        console.log(forumjson[0].name);
        console.log("Confirming that Jay's code has changed to bad code");

        var nameVal = ""; 
        try {
            nameVal = forumjson[0].name;
        } //could put in a CATCH that helps with making the missing blocks invisible 
        finally {
            setForumName(nameVal);
        }

        var nameVal2 = "";
        try {
            nameVal2 = forumjson[1].name;
        } //could put in a CATCH that helps with making the missing blocks invisible 
        finally {
            setForumName2(nameVal2);
        }

        var nameVal3 = "";
        try {
            nameVal3 = forumjson[2].name;
        } //could put in a CATCH that helps with making the missing blocks invisible 
        finally {
            setForumName3(nameVal3);
        }

        var nameVal4 = "";
        try {
            nameVal4 = forumjson[3].name;
        } //could put in a CATCH that helps with making the missing blocks invisible 
        finally {
            setForumName4(nameVal4);
        }

        var nameVal5 = "";
        try {
            nameVal5 = forumjson[4].name;
        } //could put in a CATCH that helps with making the missing blocks invisible 
        finally {
            setForumName5(nameVal5);
        }
    }

    useEffect(() => {
        fetchForumList();
        return;
    }, []);

    return <>
        <main>
			<div>
                <div><h2>Your 5 Most RecentSubscribed Channels</h2> </div>


				<div id="subscribed_channels">
                    <div><button onClick={(e) => { setPage(e, PageTypes.viewForum) }}>{name}</button></div>
                    <div><button onClick={(e) => { setPage(e, PageTypes.viewForum) }}>{name2}</button></div>
                    <div><button onClick={(e) => { setPage(e, PageTypes.viewForum) }}>{name3}</button></div>
                    <div><button onClick={(e) => { setPage(e, PageTypes.viewForum) }}>{name4}</button></div>
                    <div><button onClick={(e) => { setPage(e, PageTypes.viewForum) }}>{name5}</button></div>


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