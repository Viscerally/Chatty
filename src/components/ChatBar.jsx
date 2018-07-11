import React, {Component} from 'react';
import { userInfo } from 'os';

class Chatbar extends Component {
  constructor(props){
    super(props) 
  }
  
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onClick= {this.props.passMessage} />
      </footer>
    );
  }
}
export default Chatbar;
