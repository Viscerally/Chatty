import React, { Component } from 'react';
import ChatBar from './components/ChatBar.jsx'
import MessageList from './components/MessageList.jsx'
import Navbar from './components/Navbar.jsx'
const uuidv1 = require('uuid/v1');


class App extends Component {
  constructor(props) {
    super(props)
    this.superSocket = new WebSocket(`ws://localhost:3001/`, "protocolOne");
    this.state = {
      currentUser: 'Anon', // optional. if currentUser is not defined, it means the user is Anonymous
      usercount: 0,
      messages: [
        {
          id: 1,
          username: 'Kevin',
          content: 'Spiders are the only web developers who like bugs',
        },
        {
          id: 2,
          username: 'Anon',
          content: 'be me. be anon.'
        }
      ],
    }
  }

  componentDidMount() {
    this.superSocket.onopen = (event) => {
      this.superSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'new user') {
          console.log(data.type === "new user");
          this.handleConnectedUsers(data.size)  
        }
        const messages = this.state.messages.concat(JSON.parse(event.data))
        this.setState({ messages: messages })

      }
      // this.superSocket.send("Here's some text that the server is urgently awaiting!"); 
    };
  }


  handleMessage = (content, username) => {
    console.log("we're in app.jsx ", this.state, username);
    if (username != this.state.currentUser) {
      this.handleNewUsername(username);
    }
    const messageObj = { type: "message", username: username, content: content };
    this.superSocket.send(JSON.stringify(messageObj));
  }

  handleNotifications = (content) => {
    const messageObj = { type: "notification", content: this.state.currentUser + " has changed their name to " + content };
    this.superSocket.send(JSON.stringify(messageObj));
  }

  handleConnectedUsers = (usercount) => {
    this.setState({ usercount: usercount})
    console.log(this.state.usercount);
  }

  handleNewUsername = (username) => {
    this.handleNotifications(username);
    this.setState({ currentUser: username })
    console.log("hit this");
  }
  render() {
    return (
      <div>
        <Navbar
        usercount={this.state.usercount} />
        <MessageList messages={this.state.messages}
          currentUser={this.state.currentUser}

        />
        <ChatBar
          handleNewMessage={this.handleMessage}
          currentUser={this.state.currentUser}
          handleNewUsername={this.handleNewUsername}
        />
      </div>
    );
  }
}
export default App;
