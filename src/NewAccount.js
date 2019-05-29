import React from 'react';
import 'antd/dist/antd.css';

import { Form, Icon, Input, Button, Checkbox, TextField } from 'antd';
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
        const usersRef = firebase.database().ref("users");
        const user = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            log: this.state.log,
        };
        usersRef.push(user);
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
        <div>
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