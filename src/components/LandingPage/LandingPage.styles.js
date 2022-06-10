import styled from 'styled-components';

export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
background:#030d1f;
color:#fafcfb;
box-sizing:border-box;
position:relative;
font-family:'Roboto',sans-serif;
width:100%;
min-height:100vh;
@media only screen and (max-width: 480px) {
  min-height:100vh;
  box-sizing: border-box;
}
`;
export const NavBar = styled.div`
top: 0;
left: 0;
background:#030d1f;
width:96%;
display:flex;
justify-content:space-between;
align-items: center;
margin-bottom:20px;
padding:10px;
position:sticky;
z-index: 100;

@media only screen and (max-width: 480px) {
  width:93%;
}
`;

export const LogoBar= styled.div`
@import url('https://fonts.googleapis.com/css?family=Encode Sans Condensed');
font-weight:bold;
font-size:35px;
margin-left:10px;
font-family:'Encode Sans Condensed',sans-serif;
@media only screen and (max-width: 480px) {
  font-size:25px;
}
`;

export const HamburgerMenu=styled.button`
display:none;
@media only screen and (max-width: 480px) {
  display:block;
  color:#ffffff;
  font-size:27px;
  background:transparent;
  border:none;
}
`;

export const LoginButton=styled.div`
font-size:15px;
  width:100px;
  height:40px;
  border-width:1px;
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:6px;
  color:#fff;
  border-color:#18ab29;
  font-weight:bold;
  border-top-left-radius:9px;
  border-top-right-radius:9px;
  border-bottom-left-radius:9px;
  border-bottom-right-radius:9px;
  text-shadow: 1px 1px 0px rgba(11, 65, 129, 1);
  background:rgba(25, 123, 238, 1);
  @media only screen and (max-width: 480px) {
  display:none;
  }
`;
export const LandingBody=styled.div`
display:flex;
width:100%;
padding-bottom:90px;
@media only screen and (max-width: 480px) {
display:flex;
width:100%;
flex-direction:column;
justify-content:center;
align-items:center;
  }
`;
export const LandingText=styled.div`
font-size:15px;
width:50%;
display:flex;
margin-left:5px;
padding-left:45px;
padding-right:45px;
flex-direction:column;
justify-content:center;
@media only screen and (max-width: 480px) {
  font-size:15px;
  display:flex; 
  flex-direction:column;
  justify-content:center;
  width:96%;
  padding-left:7px;
  padding-right:7px;
  margin-bottom:15px;
}
`;
export const GetStarted=styled.div`
 font-size:15px;
  width:130px;
  height:46px;
  border-width:1px;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  border-color:rgba(94, 119, 113, 1);
  font-weight:bold;
  border-top-left-radius:9px;
  border-top-right-radius:9px;
  border-bottom-left-radius:9px;
  border-bottom-right-radius:9px;
  text-shadow: 1px 1px 0px rgba(11, 65, 129, 1);
  background:rgba(75, 81, 173, 1);
`;

export const LandingPicture=styled.img`
width:50%;
height:500px;
@media only screen and (max-width: 480px) {
 width:85%; 
}
`;

export const LandingIcons=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:5px;
margin-top:5px;
`;
export const Icons=styled.img`
width:60px;
height:60px;
`;

export const SmallText=styled.p`
margin-top:-7px;
font-size:15px;
font-weight:100px;
color:#b1b2b5;
`;

export const MenuActive=styled.div`
position:fixed;
background:#030d1f;
height:400px;
top:55px;
right:-100%;
width:60%;
display:block;
padding-right:10px;
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
  color:#ffffff;
  
 }
`;

