import styled from 'styled-components';

export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
background:#f0f0fc;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:top;
font-family:'Roboto',sans-serif;
min-height:100vh;

input[type="file"] {
    display: none;
}
@media only screen and (max-width: 480px) {
    background:#4ea8fc;
    flex-direction:column;
    width:100%;
    min-height:100vh;
  
    }
`;

export const ProfileDiv= styled.div`
display:flex;
flex-direction:column;
align-items:top;
width:460px;
padding-left:5px;
padding-right:5px;
@media only screen and (max-width: 480px) {
  width:100%;
  padding-right:0;
  padding-left:0; 
  
}
`;

export const ProfileCon = styled.div`
display:flex;
margin-top:30px;
justify-content:center;
align-items:center;
width:450px;
margin-bottom:30px;
@media only screen and (max-width: 480px) {
  width:100%; 
  flex-direction:column; 
  
}
`;

export const ProfilePic = styled.img`
object-fit: cover;
margin-left:15px;
border-radius:20px;
width:110px;
height:100px;
margin-bottom:5px;
box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-webkit-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-moz-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
@media only screen and (max-width: 480px) {
    width:100px;
    height:100px;
    border-radius:50%;
    margin-left:0; 
    
  }
`;

export const ProfileContent = styled.div`
margin-left:15px;
border-radius:20px;
min-height:100px;
width:325px;
background:#fcfafa;
align-items:top;
justify-content:flex-start;
margin-bottom:5px;
box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-webkit-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-moz-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
@media only screen and (max-width: 480px) {
    width:96%;
    background:transparent;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center; 
    margin-left:0;
    color:#ffffff;
    
  }
`;

export const ProfileName = styled.h4`
margin-left:10px;
margin-top:10px;
margin-right:10px;
`;

export const ProfileProfession = styled.h5`
margin-left:10px;
margin-right:10px;
margin-bottom:10px;
margin-top:-10px;
color:#495af2;
line-height:0.1;
`;

export const YearsOfExp= styled.small`
margin-left:10px;
margin-right:30px;
margin-bottom:10px;
color:#a9a9ab;
@media only screen and (max-width: 480px) {
    color:#ffffff;
    margin-right:10px;
    
  }
`;

export const MainMobileDiv=styled.div`
background:transparent;
@media only screen and (max-width: 480px) {
    background:#fcfafa;
    width:100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding:1px;
    
  }
`;

export const PortfolioCon= styled.div`
display:flex;
align-items: flex-start;
@media only screen and (max-width: 480px) {
    flex-direction:column;
    align-items:top; 
    justify-content:left;
    width:100%;
    padding:1px;  
}
`;

export const Skills= styled.div`
min-width:120px;
min-height:140px;
border-radius:20px;
padding:5px;
background:#fcfafa;
margin-bottom:7px;
margin-left:10px;
margin-right:15px;
color:#5d5e5e;
box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-webkit-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-moz-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
@media only screen and (max-width: 480px) {
margin-left:0;
margin-right:0;
margin-top:20px;
width:97%;
box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
-webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
-moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);   
}
`;

export const ExpAndPro= styled.div`
`;

export const Experience= styled.div`
width:305px;
min-height:150px;
background:#fcfafa;
border-radius:10px;
box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-webkit-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-moz-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
margin-bottom:10px;
padding:5px;
padding-right:10px;
@media only screen and (max-width: 480px) {

width:96%;
box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
-webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
-moz-box-shadow:0px 0px 0px 0px rgba(0,0,0,0);
  
    }
`;

export const Exp = styled.h4`
padding:8px;
background:#3864f5;
color:#f5f5f7;
margin-top:-5px;
width:88px;
margin-bottom:1px;
margin-left:-5px;
@media only screen and (max-width: 480px) {

    width:60%;
    margin-top:0;
    background:transparent;
    margin-left:0;
    color:#000000;
      
        }
`;

export const OuterExps=styled.div`
width:305px;
display:flex;
justify-content:space-between;
@media only screen and (max-width: 480px) {

    width:100%;
      
}
`;


export const Exps = styled.div`
padding:7px;
width:93%;
margin-bottom:5px;
@media only screen and (max-width: 480px) {

    width:93%;
      
}
`;

export const ExpBody=styled.div`
font-size:14px;
@media only screen and (max-width: 480px) {
    color:#e1e6eb;
    font-size:13px;
    padding:8px;
    background:#a4a5a6;
    border-radius:10px;
      
 }
`;

export const Project= styled.div`
margin-top:25px;
width:305px;
border-radius:10px;
margin-bottom:10px;
@media only screen and (max-width: 480px) {

    width:96%;
      
        }
`;



export const Pro=styled.div`
width:305px;
padding:7px;
margin-top:20px;
margin-bottom:1px;
background:#fcfafa;
border-radius:10px;
box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-webkit-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-moz-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
margin-bottom:10px;
@media only screen and (max-width: 480px) {
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:top;
background:transparent;
box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
-webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
-moz-box-shadow:0px 0px 0px 0px rgba(0,0,0,0);  
}
`;

export const ProText=styled.p`
font-size:15px;
color:#49494a;
`;

export const ProImg= styled.div`
display:flex;
justify-content:center;
`;

export const ProjectImage= styled.video`
width:100%;
height:290px;
margin-right:7px;
border-radius:10px;
margin-bottom:10px;
@media only screen and (max-width: 480px) {
    width:98%;
    
}
`;

export const ProjectVideo= styled.img`
width:100%;
height:auto;
margin-right:7px;
border-radius:10px;
margin-bottom:10px;
@media only screen and (max-width: 480px) {
    width:98%;  
    }
`;

export const ProjectDelete=styled.div`
font-size:13px;
margin-top:8px;
@media only screen and (max-width: 480px) {
    margin-left:130px;
    display:flex;
    justify-content:center;
    align-items:center;
    width:30px;
    height:30px;
    background:#6fb1f2;
    border-radius:50%;
    }


`;

export const ProjectMobileBody=styled.div`
display:block;
@media only screen and (max-width: 480px) {
    display:none;     
    }
`;

export const ProjectMobileBodyTwo=styled.div`
display:none;
@media only screen and (max-width: 480px) { 
    display:block;   
    }
`;



//styles for skeleton loader.

export const SkeletonProfilePic = styled.div`
margin-left:15px;
border-radius:20px;
width:110px;
height:100px;
margin-bottom:5px;
background:#cacccb;
box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-webkit-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-moz-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
opacity: .7;
animation:skeleton-loading 1s linear infinite alternate;

.skeleton{
    opacity: .7;
    animation:skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading{
    0%{
        background-color: hsl(200,20%,70%);
    }

    100%{
        background-color: hsl(200,20%,95%);
    }
}
@media only screen and (max-width: 480px) { 
    border-radius:50%;   
    }
`;

export const SkeletonText = styled.div`
width:96%;
height:20px;
background:#cacccb;
margin-top:10px;
margin-bottom:10px;
opacity: .7;
animation:skeleton-loading 1s linear infinite alternate;

.skeleton{
    opacity: .7;
    animation:skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading{
    0%{
        background-color: hsl(200,20%,70%);
    }

    100%{
        background-color: hsl(200,20%,95%);
    }
}
`;

export const SkeletonShortText = styled.div`
width:50%;
height:20px;
background:#cacccb;
margin-top:5px;
margin-bottom:10px;
opacity: .7;
animation:skeleton-loading 1s linear infinite alternate;

.skeleton{
    opacity: .7;
    animation:skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading{
    0%{
        background-color: hsl(200,20%,70%);
    }

    100%{
        background-color: hsl(200,20%,95%);
    }
}
`;

export const SkeletonTexts = styled.div`
width:96%;
height:20px;
background:#cacccb;
margin-top:-15px;
margin-bottom:10px;
margin-left:5px;
opacity: .7;
animation:skeleton-loading 1s linear infinite alternate;

.skeleton{
    opacity: .7;
    animation:skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading{
    0%{
        background-color: hsl(200,20%,70%);
    }

    100%{
        background-color: hsl(200,20%,95%);
    }
}
`;




export const CreateAndUpdateName = styled.input`
padding: 5px;
     font-size: 13px;
     border-width: 1px;
     border-color: #757a7a;
     background-color: #FFFFFF;
     margin-left:10px;
     margin-top:5px;
     
     border-style: solid;
     border-radius: 10px;
     box-shadow: 0px 0px 0px rgba(66,66,66,.0);
     
     width:80px;

     ::-webkit-input-placeholder {
        font-size: 12px;
        line-height: 3;
    }
`;

export const CrAndUpButton = styled.label`
  border-radius: 20px;
  color: #ffff;
  font-size: 20px;
  background: #fa1f1b;
  padding: 3px 20px 5px 20px;
  text-decoration: none;
  width:70px;
  padding:7px;
  margin-top:10px;
  margin-bottom:7px;
  margin-left:5px;
  border:none;
  text-align:center;

  :hover {
    background: #fc4a47;
    text-decoration: none;
  }

  @media only screen and (max-width: 480px) {
    background:#fa3264;
    font-size:17px;
    
  }
  
`;


export const BtnDiv= styled.div`
display: flex;
`;

export const ExperienceForm= styled.input`
padding: 5px;
     font-size: 13px;
     border-width: 1px;
     border-color: #757a7a;
     background-color: #FFFFFF;
     margin-left:6px;
     border-style: solid;
     border-radius: 10px;
     box-shadow: 0px 0px 0px rgba(66,66,66,.0);
     
     width:100px;

     ::-webkit-input-placeholder {
        font-size: 12px;
        line-height: 3;
    }
`;

export const ExpInputBox= styled.textarea`
padding: 5px;
     font-size: 13px;
     border-width: 1px;
     border-color: #757a7a;
     background-color: #FFFFFF;
     margin-left:6px;
     margin-bottom:6px;
     border-style: solid;
     border-radius: 10px;
     box-shadow: 0px 0px 0px rgba(66,66,66,.0);
     height:80px;
     width:200px;

     ::-webkit-input-placeholder {
        font-size: 12px;
        line-height: 3;
    }
`;

export const ExpInputDiv = styled.div`
display:flex;
flex-direction:column;
`;

export const EditCircle= styled.button`
padding:5px;
border-radius:50px;
font-size:8px;
width:20px;
height:20px;
margin-left:3px;
background: #fa1f1b;
color: #ffff;
border:none;
`;

export const SkillLi= styled.li`
list-style-type:circle;
margin-bottom:4px;
@media only screen and (max-width: 480px) {
    list-style-type:none;
    white-space: nowrap;
    display:inline-block;
    padding:5px;
    margin-right:3px;
    background:#a4a6a5;
    border-radius:6px;
    color:#ffffff;
    transition: margin-right .3s;

    :hover{
        margin-right:5px;
    }
       
}
`;

export const SkillUl=styled.ul`
marginLeft:-10px;
@media only screen and (max-width: 480px) {
  display:flex;
  flex-flow:row wrap;
  flex-wrap: wrap;   
}
`;

//styles for update forms and no profile sections

export const NoProfile= styled.p`
margin-left:15px;
margin-top:15px;
`;


export const SkillButton = styled.label`
  border-radius: 50%;
  color: #ffff;
  font-size: 30px;
  background: #fa1f1b;
  text-decoration: none;
  height:40px;
  width:40px;
  margin-top:10px;
  margin-bottom:7px;
  margin-left:5px;
  border:none;
  text-align:center;

  :hover {
    background: #fc4a47;
    text-decoration: none;
  }
`;

export const ProUpdate=styled.div`
border-radius: 20px;
  color: #ffff;
  font-size: 20px;
  background: #fa1f1b;
  padding: 3px 20px 5px 20px;
  text-decoration: none;
  width:70px;
  padding:7px;
  margin-top:10px;
  margin-bottom:7px;
  margin-left:5px;
  border:none;
  text-align:center;

  :hover {
    background: #fc4a47;
    text-decoration: none;
  }
`;

export const ProUpdateForm=styled.div`
width:305px;
padding:7px;
display:flex;
flex-direction:column;
margin-top:20px;
margin-bottom:1px;
background:#fcfafa;
border-radius:10px;
box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-webkit-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
-moz-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.36);
margin-bottom:10px;
`;

export const ProjectForm= styled.input`
padding: 5px;
     font-size: 12px;
     border-width: 1px;
     border-color: #757a7a;
     background-color: #FFFFFF;
     margin-left:6px;
     margin-bottom:7px;
     border-style: solid;
     border-radius: 10px;
     box-shadow: 0px 0px 0px rgba(66,66,66,.0);
     
     width:100px;

     ::-webkit-input-placeholder {
        font-size: 12px;
        line-height: 3;
    }
`;

export const ProInputBox= styled.textarea`
padding: 5px;
     font-size: 12px;
     border-width: 1px;
     border-color: #757a7a;
     background-color: #FFFFFF;
     margin-left:6px;
     margin-bottom:6px;
     border-style: solid;
     border-radius: 10px;
     margin-bottom:7px;
     box-shadow: 0px 0px 0px rgba(66,66,66,.0);
     height:80px;
     width:200px;

     ::-webkit-input-placeholder {
        font-size: 12px;
        line-height: 3;
    }
`;

export const EditRec= styled.button`
padding:5px;
border-radius:50px;
width:100%;
height:auto;
background: transparent;
border:none;
`;



export const ProSmall=styled.small`
`;

