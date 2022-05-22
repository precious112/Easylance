import styled from 'styled-components';

export const Wrapper = styled.div`
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;
padding:10px;
width:450px;
background:#ffffff;
margin-bottom:20px;
box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-webkit-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-moz-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
@media only screen and (max-width: 480px) {
width:100%;
flex-direction:column;
margin-top:15px;
background:transparent;
box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
-webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
-moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);

}
`;

export const BidsWrapper=styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
width:90%;
@media only screen and (max-width: 480px) {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;

}
`;

export const Bids=styled.div`
font-size:60px;
font-weight:bold;
color:#0e5fe3;
margin-right:20px;
@media only screen and (max-width: 480px) {
padding:15px 35px 15px 35px;
background:#ffffff;
border-radius:20px;
margin-right:40px;
box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-webkit-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-moz-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);        
}
`;

export const Small=styled.span`
font-size:14px;
font-weight:bold;
@media only screen and (max-width: 480px) {
    display:block;   
}
`;

export const SuccessfulBids=styled.div`
font-size:60px;
font-weight:bold;
color:#18f57c;
@media only screen and (max-width: 480px) {
    padding:15px 26px 15px 26px;
    background:#ffffff;
    border-radius:20px;
    text-align:center;
    box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
    -webkit-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
    -moz-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);        
    }
`;

export const Rate=styled.button`
font-size:11px;
background:transparent;
width:110px;
padding:5px 0 5px 0;
border:1px solid #0e5fe3;
color:#0e5fe3;
border-radius:8px;
display:inline-block;
vertical-align:center;
@media only screen and (max-width: 480px) {
margin-top:17px;
font-size:11px;
padding:6px 7px 6px 7px;
margin-left:5px;
display:inline;     
    }
`;