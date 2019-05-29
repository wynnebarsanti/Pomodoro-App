
import React from 'react';
import 'antd/dist/antd.css';
import './login.css';
import { Form, Icon, Input, Button,  } from 'antd';
import NewAccount from "./NewAccount";

class LogIn extends React.Component{

    state = {
        username: "",
        password: "",
        registerClicked: false,
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

    }

    register = () => {
        console.log("register clicked")
        this.setState({
            registerClicked: true
        })
        console.log(this.state.registerClicked)
    }

    
    render(){
        return(
            <div className="login">
                <h1>Pomodoro App</h1>
                <Form onSubmit={this.handleLogIn} className="login-form">
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
                            Log in
                        </Button>

                        <div>Don't Have an Account? Create one now!</div>
                        <Button type="secondary" onClick={this.register}>Register</Button>

                </Form>
                {this.state.registerClicked ? <NewAccount /> : <div></div>}
            </div>
        )
    }

}

export default LogIn;

// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LogIn);

// ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('container'));
          