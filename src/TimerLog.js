//The Timer class that contains the logic and display for the timer 
import React from 'react'
import './TimerLog.css';
import { version, Button, Input, TextArea } from "antd";
import "antd/dist/antd.css";
import { exportDefaultSpecifier } from '@babel/types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from "./firebase"

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
        
        //Get the date values
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var minutes = new Date().getMinutes(); //Current Minutes

        //Build the Date String
        let dateString = "Date: " + month + "/" + date + "/" + year + " Time: "

        //Build the Time to append to the date string 
        if(hours < 12)
        {
            if(hours == 0)
            {
                hours = 12; 
            }
            dateString = dateString + hours + ":";
            if(minutes < 10)
            {
                dateString = dateString + "0" + minutes + " AM"; 
            }   
            else
            {
                dateString = dateString + minutes + " AM";
            }
        }
        else
        {
            if(hours != 12)
            {
                hours = hours - 12; 
            }

            dateString = dateString + hours + ":";
            if(minutes < 10)
            {
                dateString = dateString + "0" + minutes + " PM"; 
            }   
            else
            {
                dateString = dateString + minutes + " PM";
            }
        }

        //Pushes the temp_dates array to the activity array
        this.state.activity.push(dateString);
        this.updateFirebase();
        //------------------------------------------------------------------------------------SEND DATA TO FIREBASE HERE
        //------------------------------------------------------------------------------------ROUTE BACK TO PROFILE.js HERE
    }
    
updateFirebase = () => {
    let currentUser = firebase.auth().currentUser;
    console.log(currentUser)
    console.log(currentUser.uid);
    const authUid = currentUser.uid;
    console.log(this.state.activity);

    var usersRef = firebase.database().ref("/users" );
    console.log(usersRef)
    let userID="";
    let log=[];
    usersRef.on('value', (snapshot) => {
        let users = snapshot.val();
        console.log(users);
        for (let user in users) {
            if( authUid == users[user].uid){
                console.log(user);
                userID=user;
                log=users[user].log;
            }
        }
    })
    // log.push({
    //         date: this.state.activity[2],
    //         time: 25,
    //         work: {
    //             title: this.state.activity[0],
    //             details: this.state.activity[1]
    //         }
        
    // })
    let newItem={
                date: this.state.activity[2],
                time: 25, //formatting fix this
                work: {
                    title: this.state.activity[0],
                    details: this.state.activity[1]
                }
            
        }
    var logRef = firebase.database().ref(`/users/${userID}/log/`);
    console.log(logRef);
    logRef.push(newItem);
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
        <div>
            <div className = "TimerLog-Header">
                Log your Activity!
                <Button
                    size= "large"
                    type="primary">
                    <Link to='/Profile'>Back to Profile</Link>
                </Button>
            </div>
            
                <div className="TimerLog-TitleText">
        
                </div>
                <div className="TimerLog-InputTitle">
                        <Input style={{ width: '25%' }} placeholder="Title of Activity" size = "large" onChange={(title)=>{this.updatingTitle(title.target.value)}}/>
                </div>
        
                <div className = "TimerLog-InputDetailText">
        
                </div>
                <div className = "TimerLog-InputDetails">
                        <Input.TextArea style={{ width: '25%' }} size = "large" placeholder="Activity Details" rows={5}  size ="large" onChange={(details)=>{this.updatingDetails(details.target.value)}}/>
                </div>
            <div className= "TimerLog-Footer">
                <Button size= "large" type="primary" onClick={()=> {this.logActivity()}}>Log Activity</Button>
            </div>
            </div>
       
        );
    }
}

export default TimerLog