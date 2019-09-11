import React, { Component } from 'react';
import './App.css';
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';


class App extends Component {
 
  state ={
    userName: 'Autumn'
  }
  
  changeName =(event) =>{
    this.setState({
      userName:'Jackson'
    })
  }
  
  hearChange =(event)=>{
    this.setState({
      userName:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
      <UserInput  name = {this.state.userName} changeIt={this.hearChange}/>
      <UserOutput name = {this.state.userName} changer={this.changeName}/>
      <UserOutput name = {this.state.userName} changer={this.changeName}/>
      <UserOutput name = {this.state.userName} changer={this.changeName}/>
      </div>
    );
  }
}

export default App;
