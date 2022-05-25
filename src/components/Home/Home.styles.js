import styled from 'styled-components';
import Default from '../../images/defaultt.jpg';

export const Wrapper= styled.div`
position:relative;
width:100%;
background:#f2f2f2;
min-height:750px;




:after{
    
    opacity:0.5;
}

@media only screen and (max-width: 480px) {
  padding:0;
  box-sizing: border-box;
}
`;


/*export const  NavWrapper=styled.div`
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
`; */

export const  ContentWrapper=styled.div`
width:100%;
padding:0;
`;

export const HomeContent=styled.div`
display:flex;
width:100%;

`;

export const ContentOne=styled.div`
width:26%;
@media only screen and (max-width: 480px) {
  display:none;  
}
`;

export const GigContent=styled.div`
width:40%;
padding:2%;
@media only screen and (max-width: 480px) {
   width:98%;
   padding-left:1px;
   padding-right:1px;
}
`;

export const Loader=styled.div`
margin-left:230px;
@media only screen and (max-width: 480px) {
 margin-left:150px;   
}
`;