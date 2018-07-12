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
        console.log(event.data);
        const messages = this.state.messages.concat(JSON.parse(event.data))
        this.setState({ messages: messages })

      }
      // this.superSocket.send("Here's some text that the server is urgently awaiting!"); 
    };
    // console.log('componentDidMount <App />');
    // setTimeout(() => {
    //   console.log('Simulating incoming message');
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = { id: uuidv1(), username: 'Obi-Wan', content: 'Hello there!' };
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({ messages: messages })
    // }, 3000);
  }


  handleMessage = (content) => {
    const newMessage = { id: uuidv1(), username: this.state.currentUser, content: content };
    const messageObj = {
      username: newMessage.username,
      content: newMessage.content
    }
    this.superSocket.send(JSON.stringify(messageObj));
  }

  handleNewUsername = (content) => {
    this.setState({ currentUser: content })
    console.log("hit this");
  }


  render() {
    return (
      <div>
        <Navbar />
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
