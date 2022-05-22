import React,{useEffect, useState} from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { BidderName, Exit, ExitButton, Header, ListItem, ListSection, Message, ViewProfile, Wrapper } from './ListBidders.styles';
import { useSelector,useDispatch } from 'react-redux';
import {saveCurMessage} from '../../actions';

const ListBidders=()=>{
  
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const location = useLocation();
  console.log(location);
  
  

  const ExitScreen=(e)=>{
      e.preventDefault();
      navigate(`/home/${location.state.id}/${location.state.username}`)
  }

  const sendMessage=(e,index)=>{
    /*onClick={(e)=>sendMessage(e,index)} inside message button*/
    e.preventDefault();
    const chatBidder=location.state.bids[index];
    const state={
        senderImage:location.state.senderImage,
        receiverId:chatBidder.bidder.user.id,
        receiverImage:chatBidder.bidder.image,
        receiverUsername:chatBidder.bidder.user.username,
        receiverFirstName:chatBidder.bidder.first_name,
        receiverLastName:chatBidder.bidder.second_name,
    }
    dispatch(saveCurMessage(state));
    navigate(`/chat/${location.state.id}`)

  }
  return(
    <Wrapper>
    <Header>
    <Exit>
           Bids 
    </Exit>
    <ExitButton onClick={ExitScreen}>
    <i class="fa fa-times" aria-hidden="true"></i>
    </ExitButton>
    </Header>
    <ListSection>
        {location.state.bids.map((item,index)=>(
            <ListItem>
            <BidderName>{item.bidder.first_name}</BidderName>
            <Link to={`/profile/${item.bidder.user.id}/${item.bidder.user.username}`}>
            <ViewProfile>view profile</ViewProfile>
            </Link>
            <Message>message</Message>
            </ListItem>
        ))
        }
    </ListSection>
  </Wrapper>
  );
}
export default ListBidders;