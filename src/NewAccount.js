import React from 'react';
import 'antd/dist/antd.css';
import './login.css';


import { Form, Input, Button } from 'antd';
import firebase from "./firebase.js";


class NewAccount extends React.Component {

    state = {
        name: "",
        username: "",
        password: "",
        log: [
            {
                date: "May29",
                time: "25 min",
                content: "firebase project"
            }
        ],
    }
    createAccount = () => { // push data onto firebase
        const userRef = firebase.database().ref("users");
        const user = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            log: this.state.log,
        };
        userRef.push(user);
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
    console.log("render new account")
    return(
        <div className="login-form">
        <br />
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
            <Button 
                type="primary" 
                htmlType="submit" 
                onClick={this.createAccount}> Submit </Button>
        </Form>

        </div>
    )
}
}

export default NewAccount;