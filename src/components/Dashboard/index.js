import React,{useState,useEffect} from 'react';
import { Bids, Small, SuccessfulBids, Wrapper,Rate, BidsWrapper } from './Dashboard.styles';
import api from '../../API/Authentication';
import { Link } from 'react-router-dom';

const DashBoard=(props)=>{
    
    
    const rate=async()=>{
        console.log(props.id);
        try{
            const response= await api.post('/gigs/rate-user/',{id:props.id},
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});
            
            console.log(response.data)
            if(response.data.message=="done"){
                alert("you've successfully rated this freelancer,thank you");
            }
            
        }
        catch(err){
              console.log(err.response.data.message);
        }
    }
   return(
       <Wrapper>
           <BidsWrapper>
           {
               props.clickable?
               <Link to={`/bidded-gigs/${props.id}`} style={{ textDecoration: 'none' }}>
               <Bids>
               {props.items}<Small>{props.iden}</Small>
               </Bids>
               </Link>
               :
               <Bids>
               {props.items}<Small>{props.iden}</Small>
               </Bids>
           }
           {
               props.clickable?
            <Link to={`/bidded-gigs/${props.id}`} style={{ textDecoration: 'none' }}>
           <SuccessfulBids>
           {props.executed}<Small>executed</Small>
           </SuccessfulBids>
           </Link>
           :
           <SuccessfulBids>
           {props.executed}<Small>executed</Small>
           </SuccessfulBids>
           }
           </BidsWrapper>
           {
               props.client?
               <Rate onClick={rate}>rate freelancer</Rate>
               :
               <>{
                   props.rate?
                   <Link to={`/home/${props.userId}/${props.name}`} style={{ textDecoration: 'none' }}>
                       <Rate>Home</Rate>
                   </Link>
                   :
                    <></>
               }</>
           }
       </Wrapper>
   );
}

export default DashBoard;