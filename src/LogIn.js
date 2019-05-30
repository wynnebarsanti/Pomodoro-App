
import React from 'react';
import 'antd/dist/antd.css';
import './login.css';
import { Form, Icon, Input, Button,  } from 'antd';
import NewAccount from "./NewAccount";
import Profile from './Profile.js';
import FirebaseLog from "./firebaseLog.js"
import firebase from "./firebase.js";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class LogIn extends React.Component{

    state = {
        username: "",
        password: "",
        userData: [],
        registerClicked: false,
        //logInClicked: false,
    }

    // changes the stored username in state based on user input
    changeUsername = (input) => {
        this.setState({
            username: input
        })
        
    }

    // changes the stored password in state based on user input
    changePassword = (input) => {
        this.setState({
            password: input
        })
    }

    // if they enter info and login... 
    handleLogIn = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
        .then(data =>{
            const currentUser = firebase.auth().currentUser;
            this.checkSignin(currentUser);
        }
        )
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...
          });
    }
    // check if their login info is correct
    checkSignin = (currentUser) => {
          firebase.auth().onAuthStateChanged(user => {
            if (user) {
              console.log("User is signed in!")
              const userRef = firebase.database().ref("users");
              this.getData(currentUser);
              
            } else {
              // No user is signed in.
              console.log("Invalid Username or Password")
            }
          });
    }

    // if the login info is correct, retrieve user data and pass it to Profile page
    getData = (currentUser) => {
        const userRef = firebase.database().ref("users");
        userRef.on('value', (snapshot) => {
        let users = snapshot.val();
        const data = [];
        for(let user in users){
            if( currentUser.uid == users[user].uid){
                console.log(users[user].name);
                console.log(users[user].log[0])
                data.push({
                    name : users[user].name,
                    log : users[user].log,
                    //dates : users[user].dates,
                    })
                    break;
                }
            }
            this.setState({
                userData: data
            });
            console.log(this.state.userData);
            return(<Profile userData={this.state.userData}/>)
        })
    }


    register = () => {
        this.setState({
            registerClicked: true
        })
    }

    
    render(){
        return(
            <div className="login">
                <h1>Pomodoro App</h1>
                <Form onClick={this.handleLogIn} className="login-form">
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            onChange={(e)=>this.changeUsername(e.target.value)}
                        />

                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            onChange={(e)=>this.changePassword(e.target.value)}
                        />

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            <Link to='/Profile'>Log In</Link>
                        </Button>

                        <div>Don't Have an Account? Create one now!</div>
                        <Button type="secondary" >
                            <Link to='/NewAccount'>Register</Link>
                        </Button>

                </Form>
                {/* {this.state.registerClicked ? <NewAccount /> : <div></div>} */}
               
            </div>
        )
    }

}

export default LogIn;

//{this.state.logInClicked ? <FirebaseLog username={this.state.username}/> : <div></div>}
// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LogIn);

// ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('container'));
          