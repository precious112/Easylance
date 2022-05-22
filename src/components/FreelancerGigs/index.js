import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Gig from "../Gig";
import { Gigs, Wrapper } from "./FreelancerGigs.styles"
import api from '../../API/Authentication';


const FreelancerGigs=()=>{
    const params=useParams();
    const baseUrl= "https://res.cloudinary.com/dcofnmq0l/";
    const [gigs,setGigs]=useState([]);


    useEffect(async()=>{
        try{
            const response= await api.get(`/gigs/bidded-gigs/${params.id}`,
            {   
                params:{
                    ordering:'closed,-date'
                },
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});
            
            console.log(response.data);
            setGigs(response.data);
            
            
        }
        catch(err){
              console.log(err.response);
        }
    },[])
    return(
        <Wrapper>
        <Gigs>
        {
            gigs.map((item)=>(
                <Gig title={item.title}
                senderImage={<>profileImage</>} 
                isClient={false} id={item.id} profileId={params.id} 
                userId={item.client} tags={item.tags} body={item.about} bids={item.bids}
                bidsPage={true} closed={item.closed}/>
            ))
        }
        </Gigs>
         </Wrapper>
    );
}

export default FreelancerGigs;