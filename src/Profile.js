import React from 'react';
import './profile.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import firebase from "./firebase.js";


class Profile extends React.Component {

    state = {
        userObject: {
            log: [],
            display: false // decides whether or not we call displayLog or not
        },
    }

    // called when you want to display recent activity
displayLog = () => {
    let userObject= this.state.userObject;
    
    if (userObject.log.length == 0){ return (<div> Welcome! Click on the Timer to start your log! </div>)}

    return userObject.log.map(
        (item) => {
            return (
                <div className="log">
                    <div className="log-title">
                        <b>Project: {item.work.title}</b>
                    </div>
                    <div className="log-details">
                        Details: {item.work.details}
                    </div>
                </div>
            )
        }
    )
}

render(){
    return(
        <body>
            <div className="header">

                <b>Hello, {this.state.userObject.name}!</b>
              
                <Button 
                    className="button-timer" 
                    size="large" 
                    type="primary">
                    <Link to='/Timer'>Start Timer</Link>
                </Button>
            </div>

            <div className="body">

                <div className="activity-header"><b>Recent Activity</b></div>

                {this.state.display ? this.displayLog() : <div></div>}
                
                <br/><br/><br/><br/><br/><br/>
            </div>
        </body>

    )
}

componentDidMount=()=>{
        // if the login info is correct, retrieve user data and pass it to Profile page

            const currUid = this.props.location.state.userUID; // pass in the logged in user's uid
            console.log("inside componentDidMount in Profile")
            console.log(currUid);

            const userRef = firebase.database().ref("users"); // access all users
            userRef.on('value', (snapshot) => {
            let users = snapshot.val();
            for(let user in users){
                if( currUid == users[user].uid){    // check for a user with a matching uid
                    const userObject= {             // if found, create a new user object that will be used to display data
                        name: users[user].name,
                        log: users[user].log,
                        uid: users[user].uid
                    }
                    console.log(userObject);
                    this.setState({userObject: userObject, display: true}) // mark display as true
                    break;

                }
            }
        })
    }
}

export default Profile;