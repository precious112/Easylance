import React,{useEffect, useState} from 'react';
import CurrentChat from '../CurrentChat';
import LastChats from '../LastChats';
import NavBar from '../NavBar';
import { ContentSection, NavWrapper, Wrapper } from './Chat.styles';
import profilepicc from '../../images/profilepicc.jpg'
import { useSelector,useDispatch } from 'react-redux';
import {saveCurMessage} from '../../actions';
import { useParams } from 'react-router-dom';
import api from '../../API/Authentication';

const Chat=()=>{
    const params = useParams();
    const [lastMessages,setLastMessages]=useState([]);
    const [displayChildren,setDisplayChildren]=useState({lastchat:"block",currentchat:"none"});

    const dispatch= useDispatch();

    const curUserId= useSelector(state=>state.user.id);
    const [userImage,setUserImage]=useState("");
    const firstname=useSelector(state=>state.chat.receiverFirstName);
    const baseUrl= "http://127.0.0.1:8000";
    const [chats,setChats]=useState([]);

    useEffect(()=>{
      if(firstname.length>0){
          setDisplayChildren({lastchat:"none",currentchat:"block"});
      }
      else{
        setDisplayChildren({lastchat:"block",currentchat:"none"});
      }
    },[firstname]);

    


    const getLastMessages = async()=>{
       try{
        const response= await api.get(`/chat/${params.id}/`,
        {
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
          }});
          console.log(response.data.messages);
          setLastMessages(response.data.messages);

       } catch(err){
          console.log(err.response.data);
       }
    }

    const getcurrentMessages=async(userId)=>{
        try{
         const response= await api.get(`/chat/currentChat/${userId}/`,
         {
           headers: {
             'Authorization': `Token ${localStorage.getItem('token')}`
           }});
           setChats(response.data.messages);
        } catch(err){
        console.log(err.response.data)
        }
     }
    

    

    useEffect(()=>{
       getLastMessages();
       return()=>{
        const state={
            senderImage:"",
            receiverImage:"",
            receiverUsername:"",
            receiverFirstName:"",
            receiverLastName:"",
            
        }
        dispatch(saveCurMessage(state));
       };
    },[]);

    useEffect(()=>{
        if(lastMessages.length>=1){
            const sender=lastMessages[0].sender
            const receiver=lastMessages[0].receiver
            if(sender.id==curUserId){
                if(sender.client !=null){
                    setUserImage(sender.client.image);
                }else{
                    setUserImage(sender.freelancer.image);
                }
            } else{
                if(receiver.client !=null){
                    setUserImage(receiver.client.image);
                }else{
                    setUserImage(receiver.freelancer.image);
                } 
            }
        }
        return()=>{
            
           };
    },[lastMessages]);

    

    useEffect(()=>{
    /*
    yea i know this code is lengthy,it's meant to
    populate the chat box with the latest message sent to the 
    current user,if you can replace this with cleaner code,
    please do,i will add reward tip to your salary if you do,no vex.
    */
       if(chats.length>=1){
         if(lastMessages.length>=1){

             if(firstname===""){

                if(lastMessages[0].sender.id==curUserId){

                    if(lastMessages[0].receiver.freelancer != null && userImage !==""){
                        const state={
                            senderImage:userImage,
                            receiverId:lastMessages[0].receiver.id,
                            receiverImage:lastMessages[0].receiver.freelancer.image,
                            receiverUsername:lastMessages[0].receiver.username,
                            receiverFirstName:lastMessages[0].receiver.freelancer.first_name,
                            receiverLastName:lastMessages[0].receiver.freelancer.second_name,
                            
    
                        }
                        dispatch(saveCurMessage(state));
                    } else{
                       const state={
                            senderImage:userImage,
                            receiverId:lastMessages[0].receiver.id,
                            receiverImage:lastMessages[0].receiver.client.image,
                            receiverUsername:lastMessages[0].receiver.username,
                            receiverFirstName:lastMessages[0].receiver.client.first_name,
                            receiverLastName:lastMessages[0].receiver.client.second_name,
                            
     
                        }
                        dispatch(saveCurMessage(state));
                    }
                } else{

                    if(lastMessages[0].sender.freelancer != null && userImage !==""){
                       const state={
                            senderImage:userImage,
                            receiverId:lastMessages[0].sender.id,
                            receiverImage:lastMessages[0].sender.freelancer.image,
                            receiverUsername:lastMessages[0].sender.username,
                            receiverFirstName:lastMessages[0].sender.freelancer.first_name,
                            receiverLastName:lastMessages[0].sender.freelancer.second_name,
                            
    
                        }
                        dispatch(saveCurMessage(state));
                    } else{
                       const state={
                            senderImage:userImage,
                            receiverId:lastMessages[0].sender.id,
                            receiverImage:lastMessages[0].sender.client.image,
                            receiverUsername:lastMessages[0].sender.username,
                            receiverFirstName:lastMessages[0].sender.client.first_name,
                            receiverLastName:lastMessages[0].sender.client.second_name,
                            
    
                        }
                        dispatch(saveCurMessage(state));
                    }
                }
             }
         }
       }
       return()=>{
        
       };
    },[lastMessages])

    return(
        <Wrapper>
            <ContentSection>
                <LastChats display={displayChildren.lastchat} senderImage={userImage} currUserId={curUserId}  Id={params.id}/>
                {
                    firstname===""? <></>:<CurrentChat display={displayChildren.currentchat}/>
                }
            </ContentSection>
            </Wrapper>
    );
}
export default Chat;