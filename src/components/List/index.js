import React, { Component } from "react";
import { MainClass} from "./Styles";
import Contacts from "./Contacts";
import History from "./History";

export default class List extends Component {
  render() {
    const item = this.props.item;
    const isHistory = this.props.isHistory;
    if(isHistory==='true')
    {
      return (
        <MainClass  >
          <History
            item={item}
          />
        </MainClass>
      );
    }
    else{
    return (
      <MainClass >
        <Contacts
          item={item}
        />
      </MainClass>
    );
   }
  }
}
