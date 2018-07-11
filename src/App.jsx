import React, { Component } from 'react';
import ChatBar from './components/ChatBar.jsx'
import MessageList from './components/MessageList.jsx'
import Navbar from './components/Navbar.jsx'
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: 'Kevin', // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          username: 'Kevin',
          content: 'Spiders are the only web developers who like bugs',
        },
        {
          id: 2,
          username: 'Anonymous',
          content: 'Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?'
        }
      ],
    }
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      // Add a new message to the list of messages in the data store
      const newMessage = { id: uuidv1(), username: 'Obi-Wan', content: 'Hello there!' };
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages })
    }, 3000);
  }


  handleMessage = (content) => {
    const newMessage = { id: uuidv1(), username: this.state.currentUser, content: content };

    const messages = this.state.messages.concat(newMessage)
    this.setState({ messages: messages })
  }


  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} />
        <ChatBar
          handleNewMessage={this.handleMessage}
          currentUser={this.state.currentUser}

        />
      </div>
    );
  }
}
export default App;
