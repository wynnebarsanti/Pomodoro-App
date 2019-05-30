import React from 'react';
import './App.css';
import LogIn from "./LogIn";
import Profile from "./Profile";
import NewAccount from "./NewAccount";
import Timer from "./Timer";
import TimerLog from "./TimerLog"
import DogImage from "./DogImage.js";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends React.Component {
render(){
  console.log('Render app')
  return (
    <div className="App">
       <DogImage />
    </div>
  );
}

}

export default App;

