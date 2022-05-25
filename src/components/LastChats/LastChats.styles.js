import styled from 'styled-components';

export const Wrapper=styled.div`
width:20%;
border-radius:25px;
padding-top:20px;
padding-bottom:20px;
background:#ffffff;
box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
-webkit-box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
-moz-box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
@media only screen and (max-width: 480px) {
  width:100%;
  border-radius:0;
  height:100%;
  position:absolute;
  top:0;
  bottom:0;
  display:${(props)=>props.display};   
}
`;

export const Header=styled.div`
width:100%;
display:flex;
justify-content:space-between;
@media only screen and (max-width: 480px) {
  height:20%;
 }
`;

export const HeaderText=styled.div`
font-size:30px;
font-weight:bold;
margin-left:15px;
`;

export const HeaderIcon=styled.div`
margin-top:5px;
font-size:22px;
color:#aecff5;
margin-right:24px;
`;

export const MessagesSection=styled.div`
margin-top:7px;
width:100%;
max-height:230px;
overflow-y:auto;

::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  ::-webkit-scrollbar-track:hover {
    background: #f1f1f1;  
  }
  @media only screen and (max-width: 480px) {
   min-height:75%;
   max-height:75%;
  }
`;

export const Message=styled.div`
width:100%;
padding:3px,6px,3px,6px;
display:flex;
align-items:left;
margin-bottom:5px;
`;

export const MessageImage=styled.img`
width:40px;
height:40px;
border-radius:50%;
margin-left:10px;
margin-top:8px;
`;

export const MessagerBox=styled.div`
padding:5px;
width:65%;
`;

export const MessengerName=styled.div`
font-size:16px;
font-weight:bold;
margin-bottom:7px;
`;

export const Msg=styled.div`
font-size:11px;
color:#8b8b8c;
`;

export const MsgCountDiv=styled.div`
margin-top:25px;
padding:0,3px,0,3px;
`;

export const MsgCount=styled.div`
border-radius:50%;
font-size:12px;
width:18px;
height:18px;
background-color:#ff2448;
color:#ffffff;
display:flex;
justify-content:center;
align-items:center;
`;
