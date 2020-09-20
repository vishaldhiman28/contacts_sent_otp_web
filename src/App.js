import React, { Component } from "react";
import ContactList from "./components/contact_list";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import MessageHistory from "./components/msg_history";
import SendMessage from "./components/send_otp";

class App extends Component {
 
  render() {
    return (
    
      <BrowserRouter>, 
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contactList" component={ContactList} />
          <Route path="/messageHistory" component={MessageHistory} /> 
          <Route path="/sendMsg/:mobileNumber/:name" component={SendMessage} /> 
          {/* <Route path="/" component={Shop} /> */}
          <Route component={Error} />
      </Switch>
   </BrowserRouter>
    );
  }
}

export default App;
