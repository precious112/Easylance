import React,{useState,useRef, useEffect} from 'react';
import profilepicc from '../../images/profilepicc.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Chat, ChatBody, ChatImage,ChatDiv, ChatSection, Header, HeaderImage,HeaderIcon,HeaderName, HeaderUser, Wrapper, FormSection,MessageForm, FormIcon, HeaderIconTwo, IconSection, HeaderIconHome, NewChatSection, OldChatSection } from './CurrentChat.styles';
import { useSelector,useDispatch } from 'react-redux';
import api from '../../API/Authentication';
import {saveCurMessage} from '../../actions';
import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/resizeHook';

const CurrentChat=(props)=>{
    const baseUrl= "https://res.cloudinary.com/chopwell/";
    const curMessage=useSelector((state)=>state.chat);
    const curUserId=useSelector(state=>state.user.id);
    const curUserName=useSelector(state=>state.user.username);
    const state=[];
    const [sentMessages,setSentMessages,sentRef]= useState(state);
    const [chat,setChat,chatRef]=useState({username:curUserName,msg:""});
    const [chats,setChats,chatsRef]=useState([]);
    const dispatch= useDispatch();
    const [height,width]=useWindowSize();
    
    
    const back=()=>{
       const state={
        senderImage:"",
        receiverImage:"",
        receiverId:"",
        receiverUsername:"",
        receiverFirstName:"",
        receiverLastName:"",
       }
       dispatch(saveCurMessage(state));
    }
    

    const getcurrentMessages=async(userId)=>{
        try{
         const response= await api.get(`/chat/currentChat/${userId}/`,
         {
            params:{
                ordering:'-date_created'
            },
           headers: {
             'Authorization': `Token ${localStorage.getItem('token')}`
           }});
           setChats(response.data.messages);
           setSentMessages(state);
           console.log('new messages',response.data.messages);
           
        } catch(err){
        console.log(err.response.data)
        }
        
     }
    
    

    
    

    const websocket= useRef(null);

    const sendChat=(e)=>{
        e.preventDefault();
        if(chat.msg.length>0){
            console.log("send!");
            
            websocket.current.send(
                JSON.stringify(chat)
            )
            setChat({username:curUserName,msg:""});
        }
    }

    useEffect(()=>{
        
         console.log("opening websocket");
         websocket.current=new WebSocket(`wss://web-production-d0df.up.railway.app/chat/${curMessage.receiverUsername}/${curUserName}/`);
         websocket.current.onopen= (event)=>{
             console.log("open:",event)
         }
         websocket.current.onclose= (event)=>{
            setSentMessages([]);
            console.log("close:",event,sentMessages);
        }


        websocket.current.onmessage=(event)=>{
            console.log("new message",event);
            console.log(JSON.parse(event.data));
            setSentMessages((prev)=> { return [...prev,JSON.parse(event.data)];});
            
            console.log(sentMessages);
            

        }
        
        
        
       getcurrentMessages(curMessage.receiverId);
       console.log('height',height);
        
    },[curMessage,curUserName]);


    useEffect(()=>{
        console.log(sentMessages);
    },[sentMessages]);

    
    
    

    return(
        <Wrapper vh={height} display={props.display}>
            <Header>
                <HeaderUser>
                    <HeaderImage src={baseUrl+curMessage.receiverImage}/>
                    <HeaderName>{curMessage.receiverFirstName} {curMessage.receiverLastName}</HeaderName>
                </HeaderUser>
                <IconSection>
                    <HeaderIconHome>
                    <Link to={`/home/${curUserId}/${curUserName}`} style={{ textDecoration: 'none' }}>
                    <i class="fa fa-home"></i>
                    </Link>
                    </HeaderIconHome>
                <HeaderIcon>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                </HeaderIcon>
                <HeaderIconTwo onClick={()=>back()}>
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </HeaderIconTwo>
                </IconSection>
            </Header>
            <ChatSection>
            {
                   sentMessages.length>0?
                   <NewChatSection>
               {
                   sentMessages.map((item)=>(
                       <>
                       
                       {
                           item.username==curUserName?
                           <ChatDiv key={item.id}>
                           <ChatBody right>
                           <Chat currentUser>{item.message}</Chat>
                              <ChatImage src={baseUrl+curMessage.senderImage}/>
                           </ChatBody>
                         </ChatDiv>
                         
                         :
                         <ChatDiv key={item.id}>
                         <ChatBody left>
                            <ChatImage src={baseUrl+curMessage.receiverImage}/>
                            <Chat>{item.message}</Chat>
                         </ChatBody>
                       </ChatDiv>
                       }
                       </>
                   ))
               }
               </NewChatSection> 
               :
               <></>
               }
            <>
               { chats.map((item)=>(
                   <>{
                     item.sender==curUserId?
                     <ChatDiv key={item.id}>
                   <ChatBody right>
                   <Chat currentUser>{item.msg}</Chat>
                      <ChatImage src={baseUrl+curMessage.senderImage}/>
                   </ChatBody>
                 </ChatDiv>
                 :
                 <ChatDiv key={item.id}>
                 <ChatBody left>
                    <ChatImage src={baseUrl+curMessage.receiverImage}/>
                    <Chat>{item.msg}</Chat>
                 </ChatBody>
               </ChatDiv>
                   }</>
                ))
               }
               </>
               
               
               
            </ChatSection>
            <FormSection>
            <MessageForm placeholder='message...'
            value={chat.msg}
            onChange={(e) => setChat(prev=>({...prev,msg:e.target.value}))}
            />
            <FormIcon onClick={sendChat}><FontAwesomeIcon icon={faPaperPlane} /></FormIcon>
            </FormSection>
        </Wrapper>
    );
}

export default CurrentChat;