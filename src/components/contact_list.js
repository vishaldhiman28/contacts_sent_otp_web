import React, { Component } from "react";
import styled from "styled-components";
import List from "./List";
import axios from "axios";
const ListWrap = styled.div`margin: 25px;`;


export default class ContactList extends Component { 
  state = {
    list: []
  }

      componentDidMount() {
        axios.get(`https://apiairl.herokuapp.com/contacts`
        )
          .then(res => {
             const list_data = res.data;
             this.setState({list: list_data});
          }).catch(error => console.log(error))
      }
  render() {
    let items = this.state.list;
    return (
      <ListWrap>
        {items.map((item, i) => <List key={i} item={item} isHistory='false'/>)}
      </ListWrap>

    );
  }
}
