import React from "react";
import firebase from './firebase.js';

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
        userRef.on('value', (snapshot) => {
            let users = snapshot.val();
            let data = [];
            for(let user in users){
                if( this.props.username == users[user].username){
                data.push({
                    name : users[user].name,
                    log : users[user].log,
                    dates : users[user].dates,
                })
                break;
            }
            }
            this.setState({
                userData: data
            });
            console.log(this.state.userData)
        })
    }
    render(){
        return(
            <Profile userData={this.state.userData}/>
        )
    }
}