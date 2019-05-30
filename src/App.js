import React from 'react';
import './App.css';
import LogIn from "./LogIn";
import Profile from "./Profile";
import NewAccount from "./NewAccount";
import Timer from "./Timer";
import TimerLog from "./TimerLog"
import TimerBreak from "./TimerBreak"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends React.Component {
render(){
<<<<<<< HEAD
  console.log('Render app')
  return (
    <div className="App">

       <Router>
         <Route exact path="/" component={LogIn} />
         <Route exact path="/NewAccount" component={NewAccount} />
         <Route exact path="/Profile" component={Profile} />
         <Route exact path="/Timer" component={Timer} />
         <Route exact path="/TimerLog" component={TimerLog} />
         <Route exact path="/TimerBreak" component={TimerBreak} />
       </Router>
    </div>
  );
}
=======
 console.log('Render app')
 return (
   <div className="App">
>>>>>>> fc2b6a5ecae28f18fcc52f17607ff512a3575e0b

      <Router>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/NewAccount" component={NewAccount} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Timer" component={Timer} />
        <Route exact path="/TimerLog" component={TimerLog} />
        <Route exact path="/TimerBreak" component={TimerBreak} />
      </Router>
   </div>
 );
}

}

export default App;