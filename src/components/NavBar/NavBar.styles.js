import styled from 'styled-components';

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
@media only screen and (max-width: 480px) {
  padding-top:6px;
  padding-bottom:6px;
  box-sizing: border-box;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  left:none;
  }
`;

export const Wrapper = styled.div`
width:96%;
padding-left:15px;
padding-right:15px;
display:flex;
justify-content:space-between;
align-items:center;



`;



export const Logo=styled.div`
@import url('https://fonts.googleapis.com/css?family=Encode Sans Condensed');
font-weight:bold;
font-size:35px;
font-family:'Encode Sans Condensed',sans-serif;
@media only screen and (max-width: 480px) {
    font-size:25px;
  }
`;

export const HamburgerMenu=styled.button`
display:none;
@media only screen and (max-width: 480px) {
  display:block;
  color:#a2a3a2;
  font-size:25px;
  background:transparent;
  border:none;
}
`;

export const MenuBar=styled.ul`
list-style-type:none;
margin-right:100px;
@media only screen and (max-width: 480px) {
    display:none;
  }
`;

export const MenuItems=styled.li`
display: inline;
text-align: center;
padding: 65px;
text-decoration: none;
font-size:32px;
color:${(props)=>props.active||"none"};

:hover{
    color:#1260fc;

}
`;

export const UserTabs=styled.div`
display:inline;
padding:2px;
@media only screen and (max-width: 480px) {
    display:none;
  }
`;

export const UserAvatar=styled.img`
border-radius:50%;
height:35px;
width:35px;
@media only screen and (max-width: 480px) {
    margin-right:5px;
  }
`;

export const LogoutButton=styled.button`
border-radius:10px;
margin-left:10px;
height:35px;
width:70px;
font-size:10px;
background:#030396;
color:#d4d4d9;
border:none;

:hover{
    background:#3838f2;
}
@media only screen and (max-width: 480px) {
background:transparent;
font-size:17px;
}
`;

export const MenuActive=styled.div`
position:fixed;
background:#ffffff;
height:400px;
top:47.7px;
right:-100%;
width:70%;
display:block;
padding-right:40px;
transition:all .5s;

&.show{
  right:0;
}
`;

export const MenuItemsActive=styled.div`
@media only screen and (max-width: 480px) {
  text-align:right;
  width:100%;
  font-size:16px; 
  margin-bottom:15px;
  color:#a2a3a2;
  padding:5px;
  border-bottom:1px solid #d6d6d4;
  
 }
`;

export const MessageCountSpan=styled.span`
font-size:15px;
width:40px;
height:40px;
padding-left:4px;
padding-right:4px;
display:flex;
background:#fc2f21;
color:#ffffff;
border-radius:50%;
justify-content:center;
align-items:center;
display:inline;
margin-left:-60px;
`;
