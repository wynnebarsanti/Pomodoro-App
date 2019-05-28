// this is the timer page
import React from 'react'


class Timer extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {display_sec: "00", display_min: "00", secondsRemaining: 60, intervalHandle: ""}
    }

    //this.handleChange = this.handleChange.bind(this);
    // method that triggers the countdown functionality
    //this.startCountDown = this.startCountDown.bind(this);
   // this.tick = this.tick.bind(this);

    tick() 
    {
        var min = Math.floor(this.state.secondsRemaining / 60);
        var sec = this.state.secondsRemaining;
        
        this.state.display_min = min;
        this.state.display_sec = sec;
       
        if(min === 0 && sec === 0) 
        {
            console.log("Stopping")
            clearInterval(this.state.intervalHandle);
        }
        else if(sec < 10) 
        {    
            console.log("seconds is less than 10")  
           this.state.display_sec = "0" + this.state.seconds;
        }

        this.state.secondsRemaining = this.state.secondsRemaining - 1;
        console.log(this.state.secondsRemaining)
        //this.render();
    }

    startCountDown()
    {
        this.state.intervalHandle = setInterval(this.tick(), 10);
    }


    render(){
        return(
        <div>
            <button onClick={()=> {this.startCountDown()}}> Start Timer </button>
            {this.state.display_min}:{this.state.display_sec}
        </div>
        );
    }
}

export default Timer