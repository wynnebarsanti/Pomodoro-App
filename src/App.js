import React from 'react';
import './App.css';
import LogIn from "./LogIn";

class App extends React.Component {
render(){
  console.log('Render app')
  return (
    <div className="App">
        <LogIn />
    </div>
  );
}

}

export default App;

