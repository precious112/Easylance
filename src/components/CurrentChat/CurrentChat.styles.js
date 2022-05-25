import styled from 'styled-components';

export const Wrapper=styled.div`
background:#ffffff;
width:40%;
min-height:400px;
margin-left:10px;
box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
-webkit-box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
-moz-box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
@media only screen and (max-width: 480px) {
  display:${(props)=>props.display};
  width:100%;
  height:100%;
  position:absolute;
  margin-left:0;
  top:0;
  bottom:0;
}

`;

export const Header=styled.div`
width:100%;
padding: 15px 5px 15px 5px;
display:flex;
justify-content:space-between;
`;

export const HeaderUser=styled.div`
display:flex;
`;

export const HeaderImage=styled.img`
width:40px;
height:40px;
border-radius:50%;
margin-right:5px;
`;

export const HeaderName=styled.div`
display:flex;
flex-direction:column;
flex-start:top;
margin-bottom:7px;
font-weight:bold;
`;

export const IconSection=styled.div`
margin-top:5px;
margin-right:10px;
display:flex;
justify-content:space-evenly;
align-items:center;
`;

export const HeaderIcon=styled.div`
border-radius:50%;
font-size:14px;
color:#bfbdbe;
width:20px;
height:20px;
background:transparent;
border:1px solid #bfbdbe;
display:flex;
justify-content:center;
align-items:center;
@media only screen and (max-width: 480px) {
  display:none;  
}
`;

export const HeaderIconHome=styled.div`
border-radius:50%;
font-size:17px;
color:#bfbdbe;
width:30px;
height:30px;
background:transparent;
display:flex;
justify-content:center;
align-items:center; 
`;

export const HeaderIconTwo=styled.div`
display:none;
@media only screen and (max-width: 480px) {
  border-radius:50%;
  font-size:17px;
  color:#bfbdbe;
  width:30px;
  height:30px;
  background:transparent;
  display:flex;
  justify-content:center;
  align-items:center;   
}
`;

export const ChatSection=styled.div`
background:#f7fcfb;
width:100%;
padding-top:10px;
min-height:330px;
max-height:330px;
overflow-y:auto;
display:flex;
flex-direction:column-reverse;

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
    min-height:74%;
    max-height:74%;  
  }
`;

/*export const OldChatSection=styled.div`
width:100%;
display:flex;
flex-direction:column-reverse;
`;
 */

export const NewChatSection=styled.div`
width:100%;
display:flex;
flex-direction:column;
`;

export const ChatDiv=styled.div`
position:relative;
margin-bottom:10px;
min-height:60px;
width:100%;
`;

export const ChatBody=styled.div`
position:absolute;
left: ${(props)=>props.left?"0":"none"};
right:${(props)=>props.right?"0":"none"};
display:flex;
flex-direction:row;
margin-top:5px;
`;

export const ChatImage=styled.img`
border-radius:50%;
height:34px;
width:34px;
margin:3px;
`;

export const Chat=styled.div`
background:${props=>props.currentUser?"#0d5cdb":"#8a8a8a"};
border-radius:27px;
padding:10px;
font-size:13px;
width:130px;
height:auto;
color:#ffffff;
`;

export const FormSection=styled.div`
width:100%;
height:50px;
padding: 20px 0px 20px 0px;
display:flex;
@media only screen and (max-width: 480px) {
  padding:0;
  position:relative;
  height:16%;

  
}

`;

export const FormIcon=styled.button`
width:33px;
height:33px;
border-radius:50%;
font-size:17px;
display:flex;
justify-content:center;
align-items:center;
color:#6bedf2;
margin-top:8px;
margin-left:6px;
border:none;
background:#ffffff;
box-shadow: 1px 3px 10px 2px rgba(0,0,0,0.10);
-webkit-box-shadow: 1px 3px 10px 2px rgba(0,0,0,0.10);
-moz-box-shadow: 1px 3px 10px 2px rgba(0,0,0,0.10);

:hover{
    background:#f5f5f5;
    margin-top:13px;
    margin-bottom:10px;
}
`;

export const MessageForm=styled.textarea`
border:none;
margin-left:15px;
padding:12px 7px 1px 7px;
height:auto;
resize:none;
overflow: hidden;
font-size:13px;
decoration:none;
border-radius:30px;
width:76%;
box-shadow: 1px 3px 10px 2px rgba(0,0,0,0.10);
-webkit-box-shadow: 1px 3px 10px 2px rgba(0,0,0,0.10);
-moz-box-shadow: 1px 3px 10px 2px rgba(0,0,0,0.10);


:focus{
outline:none;
padding:12px 7px 5px 7px;
}
@media only screen and (max-width: 480px) {
  margin-top:10px;
  margin-bottom:10px;
  
}
`;