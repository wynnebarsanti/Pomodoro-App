import React from "react";
import firebase from './firebase.js';
import Profile from "./Profile.js";

export default class FirebaseLog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userData : [],
        }
    }
    // username taken in through props as this.props.username

    componentDidMount(){
        const userRef = firebase.database().ref("users");
        console.log("after userref")
        userRef.on('value', (snapshot) => {
            console.log("got here")
            let users = snapshot.val();
            console.log(users);
            let data = [];
            for(let user in users){
                if( this.props.username === users[user].username){
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
            console.log(this.state.userData)
        }).catch(err=>console.log(err))
    }

    render(){
        console.log("gets to firebaselog")
        console.log(this.props.username);

        return(
            <div>
            {/* <Profile userData={this.state.userData}/> */}

            </div>
        )
    }
}