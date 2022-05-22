import { GigForm, TagButton, TagForm, TitleForm, Wrapper,PostButton, TagsSection, Tag, ErrorMessage, Message } from "./CreateGig.styles";
import React,{useState} from 'react';
import api from '../../API/Authentication';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

const CreateGig=(props)=>{
    const [title,setTitle]=useState("");
    const [about,setAbout]=useState("");
    const [tag,setTag]=useState([]);
    const [singleTag,setSingleTag]=useState("");
    const params = useParams();
    const [successful,setSuccessful]=useState("");
    const [error,setError]=useState("");
    const userName=useSelector(state=>state.user.username);
    const userId=useSelector(state=>state.user.id);
    let navigate=useNavigate();

    const addTag=(e)=>{
        e.preventDefault();
        setTag(
            [...tag, {name:singleTag}]
          );
        setSingleTag("");
        
    }

    

    const createPost=async(e)=>{
        e.preventDefault();
        setError("");
        setSuccessful("");
        try{
            const response= await api.post('/gigs/create-gig/',{client:params.id,title:title,about:about,tags:tag},
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});
                console.log(response.data);
                setSuccessful("Post created successfully!");
                navigate(`/home/${userId}/${userName}`);
                
                
        }catch(err){
          console.log(err.response.data)
          setError("Post failed to be created,try again!");
        }
    }
    
    return(
        <Wrapper>
            {
                error.length !=0? <ErrorMessage>{error}</ErrorMessage> :<></>
            }
            {
                successful.length !=0? <Message>{successful}</Message> :<></>
            }
            <h2>Post A Gig</h2>
            <TitleForm placeholder="title..."
            onChange={(e)=>setTitle(e.target.value)}
            />
            <GigForm rows="6" cols="6"
            onChange={(e)=>setAbout(e.target.value)}
            />
            <TagsSection>
                {
                    tag.map((item)=>(
                     <Tag>{item.name}</Tag>  
                    ))
                }
            </TagsSection>
            <TagForm placeholder="tags..."
            onChange={(e)=>setSingleTag(e.target.value)}
            />
            <TagButton onClick={addTag}>Add tag</TagButton>
            <PostButton onClick={createPost}>Post</PostButton>
        </Wrapper>
    );
}

export default CreateGig;