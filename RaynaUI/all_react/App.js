import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			page: 'signin'//,
            //channels: ,
           // messages:
		};

        this.signOutClick = this.signOutClick.bind(this);

        this.newForumClick = this.newForumClick.bind(this);
        this.joinForumClick = this.joinForumClick.bind(this);

        this.homeClick = this.homeClick.bind(this);
        this.sendClick = this.sendClick.bind(this);
    }

    // Landing & Forum
    signOutClick(event) {

    }

    // Landing
    newForumClick(event) {

    }

    joinForumClick(event) {

    }

     // Forum
    homeClick(event) {

    }

    sendClick(event) {

    }

    render() {
        if (this.state.page == 'signin') {
            return(
                <React.Fragment>
                    <SignIn />
                </React.Fragment>
            );
        } else if (this.state.page == 'landing') {
            return(
                <React.Fragment>
                    <Landing />
                </React.Fragment>
            );
        } else {
            return(
                <React.Fragment>
                    <Forum />
                </React.Fragment>
            );
        }
    }
}

class SignIn extends React.Component {
    constructor(props) {
        this.state.sign = 'initial'

        this.signInClick = this.signUpClick.bind(this);
        this.signUpClick = this.signInClick.bind(this);
        this.backClick = this.backClick.bind(this);
        this.submitClick = this.submitClick.bind(this);
    }

    signUpClick(event) {
        this.setState(sign = 'up')
    }

    signInClick(event) {
        this.setState(sign = 'in')
    }

    backClick(event) {
        this.setState(sign = 'initial')
    }

    submitClick(event) {
        
    }

    render() {
        if (this.state.sign == 'initial') {
            return (
                <React.Fragment>
                <div className="signin">
                    <div>
                        <label for="sign in"></label>
                        <button onClick={this.signInClick} aria-label="Sign In">Sign In</button>
                    </div>
                    <div>
                        <label for="sign up"></label>
                        <button onClick={this.signUpClick} aria-label="Sign Up">Sign Up</button>
                    </div>
                </div>
                </React.Fragment>
            );
        } else if (this.state.sign == 'up') {
            return(
                <React.Fragment>
                    <div>
                        <h2>Sign Up</h2>
                    </div>
                    <div className="signup_form">
                        <form>
                            <div>
                                <label for="email">Email:</label><br />
                                <input type="text" id="email" /><br />
                                <label for="username">Username:</label><br />
                                <input type="text" id="username" /><br />
                                <label for="fname">First Name:</label><br />
                                <input type="text" id="fname" /><br />
                                <label for="lname">Last Name:</label><br />
                                <input type="text" id="lname" /><br />
                                <label for="password">Password:</label><br />
                                <input type="text" id="password" /><br />
                                <label for="password_conf">Password Conformation:</label><br />
                                <input type="text" id="password_conf" /><br />
                            </div>
                            <div>
                                <label for="back"></label>
                                <button onClick={this.backClick} aria-label="Back">Back</button>
                                <label for="submit"></label>
                                <button onClick={this.submitClick} aria-label="Submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </React.Fragment>
            );
        } else if (this.state.sign == 'in') {
            return(
                <React.Fragment>
                    <div>
                        <h2>Sign In</h2>
                    </div>
                    <div className="signin_form">
                        <form>
                            <div>
                                <label for="email">Email:</label><br />
                                <input type="text" id="email" /><br />
                                <label for="password">Password:</label><br />
                                <input type="text" id="password" /><br />
                            </div>
                            <div>
                                <label for="back"></label>
                                <button onClick={this.backClick} aria-label="Back">Back</button>
                                <label for="submit"></label>
                                <button onClick={this.submitClick} aria-label="Submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </React.Fragment>
            );
        }
    }
}

ReactDOM.render(<App />, document.getElementById('insert_data'));