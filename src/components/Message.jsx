import React, { Component } from 'react';


class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      messageList: [],
    }
  }

  

  render() {
    return (
      <div>
        <div className="message">
          <span className="message-username">{this.props.message.username}</span>
          <span className="message-content">{this.props.message.content}</span>
        </div>
        <div className="message system">
          {/* {'jumps down'} */}
  </div>
      </div>
    );
  }
}
export default Message;