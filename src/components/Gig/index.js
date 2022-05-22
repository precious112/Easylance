import { BidButton, Bids, Body, CancelIcon, Header, Message, Tag, TagsSection, Title, Wrapper,ClosedDiv } from "./Gig.styles";
import React,{useEffect, useState} from 'react';
import api from '../../API/Authentication';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector,useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';

const Gig=(props)=>{
    const curUserId= useSelector(state=>state.user.id);
    const curUserName=useSelector(state=>state.user.username);
    const [bidVal,setBidVal]=useState("Bid");
    const [loading,setLoading]=useState(false);
    const [bids,setBids]=useState(props.bids);
    const [bidIndex,setBidIndex]=useState(0);
    const [removeGig,setRemoveGig]=useState("block");
    const [closed,setClosed]=useState("close");

    
    useEffect(()=>{
        //console.log(props.profileId);
        for(let i=0;i<props.bids.length;i++){
            
            if(props.bids[i].bidder.id==props.profileId){
                setBidVal("cancel bid");
                
                 return;
            }
        }
    },[props.profileId]);

    useEffect(()=>{
       if(props.closed==false){
           setClosed("close");
       }else{
           setClosed("undo");
       }
    },[props.closed]);
    

    const deleteGig=async()=>{
        try{
            const response= await api.delete(`/gigs/delete-gig/${props.id}`,
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});
                setRemoveGig("none");
        }
        catch(err){

        }
    }


    const closeGig=async(e)=>{
         e.preventDefault();
         //const state={}
         if(closed=="close"){
            try{
                const response= await api.patch(`/gigs/update-gig/${props.id}/`,{closed:true},
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});
                setClosed("undo");
            }
            catch(err){

            }
         }
         else{
            try{
                const response= await api.patch(`update-gig/${props.id}/`,{closed:false},
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});
                setClosed("close");
            }
            catch(err){

            }
         }
    }
    
    const bidGig=async(e,id,userId)=>{
        setLoading(true);
        e.preventDefault();

        for(let i=0;i<bids.length;i++){
            if(bids[i].bidder.id==props.profileId){
                 setBidIndex(i);
                 //console.log(i);
                 
            }
        }
        if(bidVal=="Bid"){
            try{
                const response= await api.post('/gigs/create-bid/',{gig:id,bidder:props.profileId},
                {
                    headers: {
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    }});
                    
                    setBidVal("cancel bid");
                    try{
                        const response= await api.get(`/gigs/update-bids/${id}/`,
                {
                    headers: {
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    }});
                    setBids(response.data);
                    setLoading(false);
                    }
                    catch(err){

                    }
            }catch(err){
    
            }
        } else{
            
            try{
                const response= await api.delete(`/gigs/delete-bid/${bids[bidIndex].id}`,
                {
                    headers: {
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    }});
                    
                    
                    setBidVal("Bid");
                    
                    try{
                        const response= await api.get(`/gigs/update-bids/${id}/`,
                {
                    headers: {
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    }});
                    setBids(response.data);
                    setLoading(false);
                    //console.log(response.data);
                    }
                    catch(err){

                    }
            }catch(err){
    
            }
        }

    }

    

    

    
        return(
<Wrapper display={removeGig}>
                <Header>
                <Title>{props.title}</Title> 
                {
                   props.profileId==props.userId && props.isClient?
                   <CancelIcon onClick={()=>deleteGig()}>
                       <i class="fa fa-times" aria-hidden="true"></i>
                   </CancelIcon> 
                   :
                   <>
                   </>
                }
                </Header>
                <Body>{props.body}</Body>
                {
                    props.profileId==props.userId && props.bids.length !=0 && props.isClient ?
                <Link to={"/bidders"}
                 state={{bids:props.bids,id:curUserId,username:curUserName,senderImage:props.senderImage}}>
                <Bids>{props.bids.length} bids already</Bids>
                </Link>
                :
                <Bids>{bids.length} bids already</Bids>
                }
                {
                    props.isClient && props.profileId==props.userId?
                    <Message onClick={closeGig}>{closed}</Message>
                    :
                    <>
                    {props.closed?
                       <ClosedDiv>closed</ClosedDiv>
                       :
                       <></>
                    }
                    </>
                }
                <TagsSection>
                  {
                      props.tags.map((item)=>(
                          <Tag>{item.name}</Tag>
                      ))
                  }  
                </TagsSection>
                <>{props.isClient==0 && !props.closed?<BidButton onClick={(e)=>bidGig(e,props.id,props.userId)}>{loading?<ClipLoader color={'#36D7B7'} loading={loading}  size={20} />
                
                :<>{bidVal}</>}</BidButton>:<></>}</>
            </Wrapper>  
            );
    }

export default Gig;