import styled from 'styled-components';

export const Wrapper= styled.div`
display:${(props)=>props.Display};
box-sizing:border-box;
background:#ffffff;
position:fixed;
z-index: 100;
top:200px;
left:370px;
border-radius:20px;
box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.61);
-webkit-box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.61);
-moz-box-shadow: 10px 10px 5px 750px rgba(140,135,135,0.61);
@media only screen and (max-width: 480px) {
    top:100px;
    left:40px;  
    
}
`;

export const Icon=styled.div`
font-size:20px;
width:100%;
margin-top:5px;
color:#fa5e52;
display:flex;
justify-content:center;
align-items:center;
`;
export const IconItem=styled.div`
border-radius:50%;
border: 1px solid #fa5e52; 
height:25px;
width:25px;
display:flex;
justify-content:center;
align-items:center;

`;

export const Dialog=styled.div`
font-size: 15px;
width:400px;
height:120px;
padding:15px 15px 15px 15px;
@media only screen and (max-width: 480px) {
    width:230px; 
    max-height:150px;
    font-size:12px; 
}
`;

export const Exit=styled.button`
background: #f2353f;
background-image: -webkit-linear-gradient(top, #f2353f, #f2353f);
background-image: -moz-linear-gradient(top, #f2353f, #f2353f);
background-image: -ms-linear-gradient(top, #f2353f, #f2353f);
background-image: -o-linear-gradient(top, #f2353f, #f2353f);
background-image: linear-gradient(to bottom, #f2353f, #f2353f);
-webkit-border-radius: 4;
-moz-border-radius: 4;
border-radius: 4px;
color: #fff5f6;
font-size: 12px;
border:none;
padding: 10px 20px 10px 20px;
text-decoration: none;
width:60px;
height:30px;
margin-bottom:10px;
margin-left:180px;
@media only screen and (max-width: 480px) {

    margin-left:100px; 
}



`;