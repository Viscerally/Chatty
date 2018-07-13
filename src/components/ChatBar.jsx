import React, {Component} from 'react';
import { userInfo } from 'os';

class Chatbar extends Component {
  constructor(props){
    super(props) 
  }

onPressEnter = (event) => {
  if(event.which === 13){
    console.log('message')
    let username = document.getElementById('username-field').value;
    this.props.handleNewMessage(event.target.value, username);
    event.target.value = "";
  }
}

onNameEnter = (event) => {
  if(event.which === 13){
    this.props.handleNewUsername(event.target.value);
  }
}


  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" id="username-field" defaultValue={this.props.currentUser} onKeyPress= {this.onNameEnter} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress= {this.onPressEnter} />
      </footer> // (stretch) add handler for "blur on input field"
    );
  }
}
export default Chatbar;
