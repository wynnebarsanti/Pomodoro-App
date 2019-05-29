//The Timer class that contains the logic and display for the timer 
import React from 'react'
import './TimerLog.css';
import { version, Button } from "antd";
import "antd/dist/antd.css";


class TimerLog extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {activity: [], title: "", details: ""}
    }

    //This Function Logs the activity of the user and adds it to the activity[] state
    logActivity()
    {
        //Pushes the title and details of the activity to activity[]
        this.state.activity.push(this.state.title);
        this.state.activity.push(this.state.details);
        
        //Intialize the temporary array of dates
        let temp_dates = []; 
        var date = new Date().getDate(); //Current Date
        console.log(date)
        var month = new Date().getMonth() + 1; //Current Month
        console.log(month)
        var year = new Date().getFullYear(); //Current Year
        console.log(year)
        var hours = new Date().getHours(); //Current Hours
        console.log(hours)
        var minutes = new Date().getMinutes(); //Current Minutes
        console.log(minutes)

        //Pushes the values to the temp_dates array
        temp_dates.push(month);
        temp_dates.push(date);
        temp_dates.push(year);
        temp_dates.push(hours)
        temp_dates.push(minutes)

        //Pushes the temp_dates array to the activity array
        this.state.activity.push(temp_dates)

    }
    
//Updates the state of title everytime the title input box changes
updatingTitle=(title)=>
{
    this.setState({title})
}

//Updates the state of details everytime the title input box changes
updatingDetails=(details)=>
{
    this.setState({details})
}


    render(){
        return(
        <div className = "TimerLog">
        <header className ="TimerLog-Body">
            What did you do? 
            <div className="TimerLog-Input">
                Title: 
            <input onChange={(title)=>{this.updatingTitle(title.target.value)}}/>
            </div>
            <div className = "TimerLog-Input">
                Details:
            <input onChange={(details)=>{this.updatingDetails(details.target.value)}}/>
            </div>
            <Button size= "large" type="primary" onClick={()=> {this.logActivity()}}>Log Activity</Button>
            {console.log(this.state.activity)}
        </header>
        </div>
        );
    }
}

export default TimerLog