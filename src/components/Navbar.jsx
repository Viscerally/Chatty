import React from 'react';

function Navbar(props) {
  return (<nav className="navbar">
    <a href="/" className="navbar-brand">Chatty</a>
    <div className="navbar-usercount" >
      {props.usercount}
    </div>
  </nav>
  );
}
export default Navbar;

