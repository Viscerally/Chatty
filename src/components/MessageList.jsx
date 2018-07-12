import React, { Component } from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const messages = this.props.messages;
    const messageList = messages.map((message) => {
      // console.log(message);
      return (<Message key={message.id} message={message} currentUser={this.props.currentUser} />)
    })
    return (
      <main className="messages">
        {messageList}
      </main>
    );
  }
}
export default MessageList;