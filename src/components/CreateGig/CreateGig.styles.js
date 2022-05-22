import styled from 'styled-components';

export const Wrapper=styled.div`
width:40%;
min-height:300px;
border-radius:15px;
padding:5%;
margin-left:300px;
margin-top:50px;
box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.51);
-webkit-box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.51);
-moz-box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.51);
@media only screen and (max-width: 480px) {
   width:100%;
   min-height:100vh;
   border-radius:0;
   margin-top:0;
   margin-left:0; 
}
`;

export const TitleForm=styled.input`
width:96%;
margin-top:7px;
margin-bottom:10px;
border-radius: 15px;
border: 1px solid #ccc;
padding: 12px 20px;
@media only screen and (max-width: 480px) {
   width:80%; 
}
`;

export const GigForm=styled.textarea`
width:96%;
margin-bottom:10px;
padding:10px;
border-radius: 15px;
@media only screen and (max-width: 480px) {
    width:85%;
}
`;

export const TagForm=styled.input`
width:80%;
padding: 12px 20px;
margin-bottom:10px;
border-radius: 15px;
border: 1px solid #ccc;
`;

export const TagsSection=styled.div`
display:flex;
width:100%;
padding:5px;
margin-bottom:7px;
`;

export const Tag=styled.div`
font-size:13px;
border-radius:25px;
background:#9c9ca1;
color:#ffffff;
margin-left:3px;
padding-top:3px;
padding-bottom:3px;
padding-left:5px;
padding-right:5px;
`;

export const TagButton=styled.button`
width:40%;
padding:15px;
background:#300261;
color:#ffffff;
font-size:10px;
margin-bottom:17px;
border:none;
border-radius:5px;
`;

export const PostButton=styled.button`
width:70%;
padding:15px;
font-size:14px;
align-text:center;
margin-left:60px;
@media only screen and (max-width: 480px) {
    margin-left:40px; 
}
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
