import React from 'react';
import 'antd/dist/antd.css';
import './login.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd';
import firebase from "./firebase.js";


class NewAccount extends React.Component {

    state = {
        name: "",
        username: "",
        password: "",
        log: [
            {
                date: "May 20th",
                time: 18,
                work:{
                    title: "Express Project",
                    details: "Created an Express backend for a simple author search"
                }
            },
            {
                date: "May 25th",
                time: 25,
                work: {
                    title: "Restaurant Project",
                    details: "Created an app that displayed restaurants based on location"
                }
            },
        ],
    }
    createAccount = () => { // push data onto firebase
        /*const userRef = firebase.database().ref("users");
        const user = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            log: this.state.log,
        };
        userRef.push(user);*/
        firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
        .then(data => {
            console.log(data.user.uid);
            const userRef = firebase.database().ref("/users"); 
            const new_user = {
                uid : data.user.uid,
                name : this.state.name,
                log : []
            }
            userRef.push(new_user);
            // const currentUser = firebase.auth().currentUser;
            // usersRef.push(user);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    };

    changeName = (input) => {
        this.setState({
            name: input
        })
    }
    changeUsername = (input) => {
        this.setState({
            username: input
        })
    }
    changePassword = (input) => {
        this.setState({
            password: input
        })
    }

render(){
    return(
        <div className="login">
        <h2>Please Enter Your Information:</h2>
        <Form>
            <Input
                placeholder="Name"
                onChange={(e)=>this.changeName(e.target.value)}
            />
            <Input
                placeholder="Username (Email)"
                onChange={(e)=>this.changeUsername(e.target.value)}
            />
            <Input
                placeholder="Password"
                type="password"
                onChange={(e)=>this.changePassword(e.target.value)}
            />
            <br/>
            <Button 
                type="primary" 
                htmlType="submit" 
                onClick={this.createAccount}> 
                <Link to='/'>Submit</Link>
            </Button>
        </Form>

        </div>
    )
}
}

export default NewAccount;