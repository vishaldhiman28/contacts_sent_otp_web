import React, { Component } from "react";
import styled from "styled-components";
import List from "./List";
import axios from "axios";
const ListWrap = styled.div`margin: 25px;`;


export default class MessageHistory extends Component { 
  state = {
    list: []
  }
  componentDidMount() {
    axios.get(`https://apiairl.herokuapp.com/history`
    )
      .then(res => {
         const list_data = res.data;
         this.setState({list: list_data});
      }).catch(error => console.log(error))
  }
  render() {
    const items = this.state.list;
    return (
      <ListWrap>
        {items.map((item, i) => <List key={i} item={item} isHistory='true'/>)}
      </ListWrap>

    );
  }
}
