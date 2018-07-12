import React, {Component} from 'react';
import { userInfo } from 'os';

class Chatbar extends Component {
  constructor(props){
    super(props) 
  }

onPressEnter = (event) => {
  if(event.which === 13){
    this.props.handleNewMessage(event.target.value);
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
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser} onKeyPress= {this.onNameEnter} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress= {this.onPressEnter} />
      </footer>
    );
  }
}
export default Chatbar;
