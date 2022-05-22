import styled from 'styled-components';

export const Wrapper = styled.div`
background:#030d1f;
display:flex;
justify-content:center;
align-items:center;
width:100%;
min-height:100vh;
left:0;
top:0;
position:relative;
box-sizing:border-box;
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
font-family:'Roboto',sans-serif;
@media only screen and (max-width: 480px) {
  background:#ffffff;
  }
`;

export const LoginCard= styled.div`
background:#fcffff;
width:350px;
height:500px;
border-radius:20px;
padding:30px,20px,30px,20px;
display:flex;
flex-direction:column;
justify-content:top;
align-items:center;
position:fixed;
@media only screen and (max-width: 480px) {
width:100%;
border-radius:0;
}
`;

export const HeaderLogin= styled.p`
margin-top:10px;
font-size:50px;
font-weight:bold;
`;

export const LoginDiv=styled.div`
display:flex;
flex-direction:column;
justify-content:top;
align-items:left;
margin-top:10px;
height:330px;
width:300px;
`;

export const LoginLabel= styled.div`

margin-left:7px;
margin-top:10px;
margin-bottom:-3px;
color:#2d2e2e;
font-weight:bold;
font-size:15px;
`;

export const InputBox= styled.input`
margin-top:5px;
margin-right:3px;
margin-left:3px;
padding: 12px 20px;
display: inline-block;
border: 1px solid #ccc;
border-radius: 15px;
box-sizing: border-box;
background:#d7d9d9;
`;

export const LoginButton= styled.button`
background: #165ff2;
  border-radius: 7px;
  color: #ffffff;
  font-size: 15px;
  padding: 13px 20px 13px 20px;
  text-decoration: none;
  margin-top:25px;
  border:none;

  :hover {
    background: #4f7ff7;
    text-decoration: none;
  }

`;


export const UserErrorMsg= styled.div`
color: #fc0f17;
margin-top:-7px;
`;

export const Message= styled.div`
background:#06bd5b;
margin-top:-15px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#f5f7f6;
padding-left:3px;
padding-right:3px;
border-radius:10px;
height:40px;
`;

export const ErrorMessage= styled.div`
background:#f5071b;
margin-top:-15px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#f5f7f6;
padding-left:3px;
padding-right:3px;
border-radius:10px;
height:40px;
`;

export const NoContent= styled.div`
display:none;
`;

export const RegisterText= styled.small`
margin-top:5px;
margin-left:60px;
color:#8f8d8d;
`;