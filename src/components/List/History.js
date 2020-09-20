import React from "react";
import {HeaderClass, TitleClass } from "./Styles";
import ContactDetails from "../contact_details";


export default function History(props) {

  const items = props.item;
  return (
    <HeaderClass>
       
     <TitleClass>
        {items.name}  
        {' '}
      </TitleClass>
     <ContactDetails items={items} isContact={false}/> 
     

    </HeaderClass>
  );
}
