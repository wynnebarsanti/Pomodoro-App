//The Timer class that contains the logic and display for the timer 
import React from 'react'
import './Timer.css';
import { version, Button } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom'


class TimerBreak extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {display_sec: "00", display_min: "05", secondsRemaining: 300, intervalHandle: "", redirect: false}
    }

    //Binding Prevents async errors from occuring
    startCountDown = this.startCountDown.bind(this);
    tick = this.tick.bind(this);

    //Tick() Function that runs every second once the timer is run 
    async tick() 
    {
        var min = Math.floor(this.state.secondsRemaining / 60);
        var sec = this.state.secondsRemaining - (min *60);

        //Sets the display variables 
        await this.setState({display_min : min, 
                       display_sec : sec})
        
        const temp = sec;

        //If statement that stops the timer 
        if(min === 0 && sec === 0)
        {
            console.log("Stopping")
            this.setState({display_sec : "0" + temp.toString()})
            clearInterval(this.state.intervalHandle);
            this.setState({display_min: "00", display_sec: "00", secondsRemaining: 1500})
            this.setState({redirect: true})
            //------------------------------------------------------------------------------------ROUTE TO TIMERLOG.js HERE
        }
        //If statement that adjusts display for when the seconds go under 10 
        else if(sec < 10) 
        {
            console.log("seconds is less than 10")  
            this.setState({display_sec : "0" + temp.toString()})
        }
        //If statement that adjusts display for when the minutes go under 10 
        if(min < 10)
        {
            const temp2 = min
            console.log("minutes is less than 10")  
            this.setState({display_min : "0" + temp2.toString()})
        }
        //Increments the seconds remaining 
        this.state.secondsRemaining = this.state.secondsRemaining - 1;
        console.log(this.state.secondsRemaining)
        console.log(this.state.display_min)
        console.log(this.state.display_sec)
        this.updateDisplay()
    }

    //Starts the tick() function and runs it every second
    startCountDown()
    {
        this.state.intervalHandle = setInterval(this.tick, 1000);
    }

    pauseCountDown()
    {
        clearInterval(this.state.intervalHandle)
    }

    //Displays the timer
    updateDisplay()
    {
        return (this.state.display_min + ":" + this.state.display_sec)
    }    

    //Redirects to the timer page if "redirect" is true 
    renderRedirect = () => 
    {
        if (this.state.redirect) 
        {
          return <Redirect to='/Timer' />
        }
    }
    

    render(){
        return(
        <div>
            <div className = "Timer-Header">
               Take a Break!
                <Button
                    size= "large"
                    type="primary"> 
                   <Link to='/Profile'>Exit Back to Profile</Link>
                </Button>                
                    
            </div>
            <header className=" Timer-Body">
                {this.updateDisplay()}
                <div style={{ marginTop: "16px"}}>
                    <Button size= "large" type="primary" onClick={()=> {this.startCountDown()}}>Start Timer</Button>
                    <Button size= "large" type="secondary" onClick={()=> {this.pauseCountDown()}}>Pause Timer</Button>
                </div>
                {this.renderRedirect()}
            </header>
        </div>
        );
    }
}

export default TimerBreak