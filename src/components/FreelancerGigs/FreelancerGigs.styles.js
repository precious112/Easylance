import styled from 'styled-components';

export const Wrapper=styled.div`
box-sizing:border-box;
display:flex;
flex-direction:column;
justify-content:center;
align-items:top;
background:#f0f0fc;
width:100%;
min-height:100vh;
padding-top:15px;
`;

export const Gigs=styled.div`
width:40%;
margin-left:350px;
@media only screen and (max-width: 480px) {
  width:98%;
  margin-left:0;  
}
`;

