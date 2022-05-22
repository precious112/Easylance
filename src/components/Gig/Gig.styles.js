import styled from 'styled-components';

export const Wrapper=styled.div`
display:${(props)=>props.display || "block"};
position:relative;
width:90%;
background:#ffffff;
min-height:200px;
padding:5%;
border:1px solid #c7c7c9;
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
font-family:'Ubuntu',sans-serif;
box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
-webkit-box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
-moz-box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
:hover{
    background:#f7faf9;
}
`;

export const Header=styled.div`
width:100%;
display:flex;
justify-content:space-between;
margin-bottom:17px;
`;

export const Title=styled.div`
width:90%;
font-size:20px;
font-weight:bold;
`;

export const CancelIcon=styled.div`
width:10%;
font-size:20px;
font-weight:bold;
`;

export const Body=styled.div`
width:100%;
margin-bottom:10px;
`;

export const Bids=styled.div`
margin-bottom:7px;
font-size:12px;
color:#49494a;
`;

export const TagsSection=styled.div`
display:flex;
width:100%;
padding:5px;
margin-bottom:17px;
`;

export const Tag=styled.div`
font-size:13px;
border-radius:25px;
background:#9c9ca1;
color:#ffffff;
margin-right:6px;
padding-top:3px;
padding-bottom:3px;
padding-left:5px;
padding-right:5px;
`;

export const Message=styled.button`
margin-top:5px;
margin-bottom:7px;
font-size:12px;
padding:6px 10px 6px 10px;
background:#3251fc;
color:#ffffff;
border:none;
border-radius:8px;
`;

export const ClosedDiv=styled.div`
color:#e34b50;
font-size:11px;
margin-bottom:7px;
`;

export const BidButton=styled.button`
width:70%;
padding:15px;
border-radius:25px;
font-size:13px;
border:none;
background:#5c5cff;
color:#ffffff;
margin-left:70px;

:hover{
    background:#4373f7;
    
}
@media only screen and (max-width: 480px) {
  margin-left:40px;  
}

`;