import React from 'react';
import PageTypes from '../../Constants/PageTypes/PageTypes';
import MainPageContent from './Content/MainPageContent/MainPageContent';
import SignOutButton from './Components/SignOutButton/SignOutButton';
import UpdateName from './Components/UpdateName/UpdateName';
import UpdateAvatar from './Components/UpdateAvatar/UpdateAvatar';
import ViewForum from './Components/ViewForum/ViewForum';
import CreateNewForum from './Components/CreateNewForum/CreateNewForum';
import './Content/MainPageContent/Styles/MainPageContent.css';

const Main = ({ page, setPage, setAuthToken, setUser, user }) => {
    let content = <></>
    let contentPage = true;
    switch (page) {
        case PageTypes.signedInMain:
            content = <MainPageContent user={user} setPage={setPage} />;
            break;
        case PageTypes.signedInUpdateName:
            //content = <UpdateName user={user} setUser={setUser} />;
            content = <>If you're seeing this, Jay successfully removed the updateName page</>;
            break;
        case PageTypes.signedInUpdateAvatar:
           // content = <UpdateAvatar user={user} setUser={setUser} />;
            content = <>If you're seeing this, Jay successfully removed the updateAvatar page</>;
            break;
        case PageTypes.viewForum:
             content = <ViewForum user={user} setUser={setUser} />;
            //    content = <>This is a general forum, I swear!</>;
                break;
        case PageTypes.createNewForum:
                 content = <CreateNewForum user={user} setPage={setUser}/>;
                 break;
        default:
            content = <>Error, invalid path reached</>;
            contentPage = false;
            break;
    }
    return <>
        <div>
            <header>
                <div><h1>ComTalk</h1> </div>

                <div id="landing_title">Hello, {user.firstName} {user.lastName}</div>
            </header>
        </div>
        {content}
        {contentPage && <button id="back_home" onClick={(e) => setPage(e, PageTypes.signedInMain)}>Back to Main</button>}
        <SignOutButton setUser={setUser} setAuthToken={setAuthToken} />

        <footer>
            <p>Andy | Jay | Rayna | Wanyu | Copyright &copy; 2020</p>
	    </footer>
    </>
}

export default Main;