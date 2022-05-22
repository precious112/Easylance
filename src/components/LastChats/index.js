import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect, useState} from 'react';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { Header, HeaderIcon, HeaderText, Message, MessageImage, MessagerBox, MessagesSection, MessengerName, Msg, MsgCount, MsgCountDiv, Wrapper } from './LastChats.styles';
import profilepicc from '../../images/profilepicc.jpg';
import { useSelector,useDispatch } from 'react-redux';
import {saveCurMessage} from '../../actions';
import api from '../../API/Authentication';

const LastChats=(props)=>{
    const dispatch= useDispatch();
    const baseUrl= "http://127.0.0.1:8000";
    const [lastMessages,setLastMessages]=useState([]);

    const getLastMessages = async()=>{
        try{
         const response= await api.get(`/chat/${props.currUserId}/`,
         {
            params:{
                ordering:'-date_created'
            },
           headers: {
             'Authorization': `Token ${localStorage.getItem('token')}`
           }});
           //console.log(response.data.messages);
           setLastMessages(response.data.messages);
 
        } catch(err){
           //console.log(err.response.data);
        }
     }

    const goToChat =async(index)=>{
        const sender=lastMessages[index].sender;
        const receiver=lastMessages[index].receiver;
        console.log(sender.id,receiver.id);
        
        if(sender.id==props.currUserId){
            if(receiver.client!=null){
                const state={
                    senderImage:props.senderImage,
                    receiverId:receiver.id,
                    receiverImage:receiver.client.image,
                    receiverUsername:receiver.username,
                    receiverFirstName:receiver.client.first_name,
                    receiverLastName:receiver.client.second_name,
                    
                }
                dispatch(saveCurMessage(state));
                
              }else{
               const state={
                    senderImage:props.senderImage,
                    receiverId:receiver.id,
                    receiverImage:receiver.freelancer.image,
                    receiverUsername:receiver.username,
                    receiverFirstName:receiver.freelancer.first_name,
                    receiverLastName:receiver.freelancer.second_name,
                    
                }
                dispatch(saveCurMessage(state));
                
              }
        }else{
            if(sender.client!=null){
                const state={
                    senderImage:props.senderImage,
                    receiverId:sender.id,
                    receiverImage:sender.client.image,
                    receiverUsername:sender.username,
                    receiverFirstName:sender.client.first_name,
                    receiverLastName:sender.client.second_name,
                    
                }
                //console.log(state);

                dispatch(saveCurMessage(state));
                
              }else{
                const state={
                    senderImage:props.senderImage,
                    receiverId:sender.id,
                    receiverImage:sender.freelancer.image,
                    receiverUsername:sender.username,
                    receiverFirstName:sender.freelancer.first_name,
                    receiverLastName:sender.freelancer.second_name,
                    
                }
                //console.log(sender.username);
                dispatch(saveCurMessage(state));
                
              }

        }
        
    }

    useEffect(()=>{
      getLastMessages();
    },[]);

    return(
        <Wrapper display={props.display}>
            <Header>
                <HeaderText>Messages</HeaderText>
                <HeaderIcon><FontAwesomeIcon icon={faPenToSquare} /></HeaderIcon>
            </Header>
            <MessagesSection>
                {
                    lastMessages.map((item,index)=>(
                        <Message key={item.id} onClick={()=>goToChat(index)}>
                        {
                            props.currUserId==item.sender.id ?
                            <>
                            {
                                item.receiver.client !=null? 
                                <MessageImage  src={baseUrl+item.receiver.client.image}/> 
                                : 
                                <MessageImage  src={baseUrl+item.receiver.freelancer.image}/>  
                             }
                            <MessagerBox>
                                 
                      {
                          item.receiver.client !=null?
                          <>
                          
                          <MessengerName>
                              {item.receiver.client.first_name} {item.receiver.client.second_name}
                          </MessengerName></> :
                          <>

                          <MessengerName>
                              {item.receiver.freelancer.first_name} {item.receiver.freelancer.second_name}
                         </MessengerName>
                         </>
                      }
                      
                      <Msg>{item.msg}</Msg>
                      
                  </MessagerBox>
                  <MsgCountDiv>
                  {
                          item.new_msgs?
                          <MsgCount>{item.new_msgs}</MsgCount>
                          :
                          <></>
                      }
                  </MsgCountDiv>
                  </>
                            :
                            <>
                            <>
                            {
                                item.sender.client !=null? 
                                <MessageImage  src={baseUrl+item.sender.client.image}/> 
                                : 
                                <MessageImage  src={baseUrl+item.sender.freelancer.image}/>  
                             }
                            <MessagerBox>
                                 
                      {
                          item.sender.client !=null?
                          <>
                          
                          <MessengerName>
                              {item.sender.client.first_name} {item.sender.client.second_name}
                          </MessengerName></> :
                          <>

                          <MessengerName>
                              {item.sender.freelancer.first_name} {item.sender.freelancer.second_name}
                         </MessengerName>
                         </>
                      }
                      
                      <Msg>{item.msg}</Msg>
                      
                  </MessagerBox>
                  <MsgCountDiv>
                      {
                          item.new_msgs?
                          <MsgCount>{item.new_msgs}</MsgCount>
                          :
                          <></>
                      }
                  </MsgCountDiv>
                  </>
                            </>

                        }
                  
                  
                  
                </Message>
                    ))
                }
            </MessagesSection>
        </Wrapper>
    );
}

export default LastChats;