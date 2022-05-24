import FormGig from "../FormGig";
import React,{useEffect, useState} from "react";
import Gig from "../Gig";
import NavBar from "../NavBar";
import { ContentOne, ContentWrapper, GigContent, HomeContent, Loader, NavWrapper, Wrapper } from "./Home.styles";
import DialogBox from "../DialogBox";
import ClipLoader from "react-spinners/ClipLoader";
import Default from '../../images/defaultt.jpg';
import api from '../../API/Authentication';
import { useParams } from 'react-router-dom';
import {NO_GIGS} from '../../DialogText';
import { Link,useNavigate } from 'react-router-dom';


const Home=()=>{
    const [state,setState]=useState({Gigs:[],isClient:0,clientGig:3});
    const [profileImage,setProfileImage]=useState(Default);
    const [brightness,setBrightness]=useState("15px");
    const [dialog,setDialog]=useState("none");
    const [loading,setLoading]=useState(false);
    const [profileId,setProfileId]=useState(0);
    const [error,setError]=useState("");
    const navigate=useNavigate();

    const params = useParams();

    

    const getGigs=async()=>{
        setLoading(true);
      try{
        const response= await api.get(`/gigs/${params.id}/`,
        {
          params:{
            ordering:'closed,-date'
        },
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
          }});
          setState(response.data);
          //console.log(response.data);
          setLoading(false);
      }catch(err){
        console.log(err.response);
        if(err.response.data != null){
          if(err.response.data.message=="User has no profile"){
             navigate(`/profile/${params.id}/${params.username}`)
          }
          if(err.response.data.message=="No gig matching your skills found,try using specific keywords like 'Django','React','Python','Photography' in your profile "){
             setError(err.response.data.message);
          }
        }
      }  
    }

    const getProfileImage=async()=>{
        try{
            const response= await api.get(`/profile/${params.id}/${params.username}/`,
            {
              headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
              }});
              setProfileImage(response.data.profile.image);
              setProfileId(response.data.profile.id);
              //console.log(response.data.profile.id);
        }catch(err){
           console.log(err.response)
        }
        }
    

    useEffect(()=>{
       getGigs();
       getProfileImage();
       return () => {
        setState({}); // This worked for me
      };
    },[]);

    

    return(
        
        <>
            <Wrapper>
            <NavBar image={profileImage}/>
                {state.clientGig==0?<DialogBox display={"block"} message={NO_GIGS}/>:<></>}
                {error?<DialogBox display={"block"} message={error}/>:<></>}
        <ContentWrapper>
            <HomeContent>
                <ContentOne></ContentOne>
                <GigContent>
                    {
                     loading?
                     <Loader><ClipLoader color={'#36D7B7'} loading={loading}  size={25} /> </Loader>
                     :
                    <> {state.isClient==1?<FormGig profileId={profileId}/>:<></>}
                 {
                  state.Gigs.map((item)=>(
                     <Gig  title={item.title} senderImage={profileImage} 
                     isClient={state.isClient} id={item.id} profileId={profileId} 
                     userId={item.client} tags={item.tags} 
                     body={item.about} bids={item.bids} closed={item.closed}/> 
                  ))
                 }</>
                    }
                    
                 
                </GigContent>
                <ContentOne></ContentOne>
            </HomeContent>
            </ContentWrapper>
        </Wrapper>

        </>
    
        
    );
}

export default Home;