import React, { Component } from 'react';


class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      messageList: [],
    }
  }


  render() {
    return (
      <div>
        <div className="message">
          <span className="message-username">Anonymous1</span>
          <span className="message-content">{this.props.userName}</span>
        </div>
        <div className="message system">
          Anonymous1 changed their name to nomnom.
  </div>
      </div>
    );
  }
}
export default Message;