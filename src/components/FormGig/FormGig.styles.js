import styled from 'styled-components';

export const Wrapper=styled.div`
display:${(props)=>props.Display};
color:#686869;
border-radius:20px;
width:90%;
padding:5%;
margin-bottom:10px;
background:#ffffff;
box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
-webkit-box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
-moz-box-shadow: -1px 3px 5px -2px rgba(0,0,0,0.63);
`;

export const CreateGigBtn=styled.button`
border-radius:25px;
width:60%;
height:50px;
background:#dce0dd;
border:none;
font-size:13px;
color:#19181a;
margin-right:10px;
margin-left:30px;
`;

export const CreateGigBtnTwo=styled.button`
border-radius:50%;
width:30px;
height:30px;
background:#dce0dd;
border:none;
font-size:10px;
`;