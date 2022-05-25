import styled from 'styled-components';

export const Wrapper=styled.div`
position:relative;
background:#f2f2f2;
min-height:100vh;
width:100%;
padding-top:10px;
@media only screen and (max-width: 480px) {
  padding:1px;
  height:100vh;
  min-height:100vh; 
  margin:0px;
  box-sizing: border-box;
}
`;

export const  NavWrapper=styled.div`
color:#686869;
width:100%;
background:#ffffff;
top:0;
left:0;
position:sticky;
z-index: 100;
box-shadow: -1px 5px 16px -10px rgba(0,0,0,0.63);
-webkit-box-shadow: -1px 5px 16px -10px rgba(0,0,0,0.63);
-moz-box-shadow: -1px 5px 16px -10px rgba(0,0,0,0.63);
`;

export const ContentSection=styled.div`
width:100%;
margin-top:20px;
display:flex;
justify-content:center;
align-items:center;
@media only screen and (max-width: 480px) {
  margin-top:0;
  height:100%;  
}
`;