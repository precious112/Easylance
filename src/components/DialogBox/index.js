import { Dialog, Exit, Icon, IconItem, Wrapper } from "./DialogBox.styles"
import React,{useEffect, useState} from "react";

const DialogBox=(props)=>{
  const [display,setDisplay]=useState(props.display);
  const hide=(e)=>{
      e.preventDefault();
    setDisplay("none");
  }
    return(
    <Wrapper Display={display}>
        <Icon>
          <IconItem>
          <i class="fa fa-exclamation" aria-hidden="true"></i>
          </IconItem>
        </Icon>
        <Dialog>{props.message}</Dialog>
        <div><Exit onClick={hide}>OK</Exit></div>
    </Wrapper>
    );
}

export default DialogBox;