import React from 'react';
import './profile.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

class Profile extends React.Component {

    state = {
        name: "Name",
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
        ]
    }

displayLog = () => {
    let log = this.state.log;
    return log.map(
        (item) => {
            return (
                <div className="log">
                    <div className="log-title">
                        <b>Project: {item.work.title}</b>
                    </div>
                    <div className="log-details">
                        Details: {item.work.details}
                    </div>
                </div>
            )
        }
    )
}

render(){
    //console.log(this.props.userData);
    return(
        <body>
            <div className="header">

                <b>Hello, {this.state.name}!</b>
              
                <Button className="button-timer" size="large" type="primary">Start Timer</Button>
            </div>

            <div className="body">

                <div className="activity-header">Recent Activity</div>

                {this.displayLog()}
                
                <br/><br/><br/><br/><br/><br/>
            </div>
        </body>

    )
}
}

export default Profile;