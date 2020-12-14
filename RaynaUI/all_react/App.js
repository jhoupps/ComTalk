class App extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			page: 'signin',
            channels: ,
            messages:
		};

		this.signInClick = this.signUpClick.bind(this);
        this.signUpClick = this.signInClick.bind(this);
        this.signOutClick = this.signOutClick.bind(this);
        this.homeClick = this.homeClick.bind(this);
        this.newForumClick = this.newForumClick.bind(this);
        this.joinForumClick = this.joinForumClick.bind(this);
        this.sendClick = this.sendClick.bind(this);
    }
    
    signInClick(event) {

    }

    signUpClick(event) {

    }

    signOutClick(event) {

    }

    homeClick(event) {

    }

    newForumClick(event) {

    }

    joinForumClick(event) {

    }

    sendClick(event) {

    }

    render() {
        if (this.state.page == 'signin') {
            return(
                <React.Fragment>
                    <Signin />
                </React.Fragment>
            );
        } else if (this.stat.page == 'landing') {
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
    }

    render() {
        if (this.state.sign == 'initial') {
            return (
                <React.Fragment>
                <div className="signin">
                    <div>
                        <label for="sign in"></label>
                        <button aria-label="Sign In">Sign In</button>
                    </div>
                    <div>
                        <label for="sign up"></label>
                        <button aria-label="Sign Up">Sign Up</button>
                    </div>
                </div>
                </React.Fragment>
            );
        } else if (this.state.sign == 'up') {
            return();
        } else if (this.state.sign == 'in') {
            return();
        }
    }
}