import styled from 'styled-components';

export const Wrapper= styled.div`
background:#ffffff;
position:fixed;
z-index: 100;
top:100px;
left:380px;
min-height:400px;
width:29%;
box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.61);
-webkit-box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.61);
-moz-box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.61);
@media only screen and (max-width: 480px) {
  min-height:100vh;
  width:100%;
  left:0;
  top:0;  
}
`;

export const Header=styled.div`
font-size:22px;
font-weight:bold;
width:100%;
display:flex;
padding-left:160px;
margin-top:10px;
`;

export const ExitButton=styled.button`
background:transparent;
border:none;
`;

export const Exit=styled.div`
font-size:20px;
font-weight:bold;
margin-right:170px;
@media only screen and (max-width: 480px) {
    margin-right:100px;
}
`;

export const ListSection=styled.div`
margin-top:15px;
width:98%;
margin-left:7px;
min-height:350px;
max-height:350px;
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
`;

export const ListItem=styled.div`
width:97%;
padding:5px 5px 5px 5px;
display:flex;
justify-content:space-between;
border:1px #e8e9eb;
border-style:solid none none none;
`;

export const BidderName=styled.div`
font-size:14px;
color:#0a67fc;
font-weight:bold;
`;

export const ViewProfile=styled.button`
font-size:12px;
padding:6px 10px 6px 10px;
background:transparent;
border:1px solid #fc5f53;
color:#fc5447;
border-radius:8px;
`;

export const Message=styled.button`
font-size:12px;
padding:6px 10px 6px 10px;
background:#3251fc;
color:#ffffff;
border:none;
border-radius:8px;
`;