import React,{useRef,useState,useEffect} from 'react';
import { ProfileContent, ProfileDiv,ProfileCon, ProfilePic, Wrapper, ProfileName, ProfileProfession, YearsOfExp, PortfolioCon, Skills, ExpAndPro, Experience, Exp,Exps, Project, Pro, ProjectImage, ProImg, SkeletonProfilePic, SkeletonShortText,SkeletonText, SkeletonTexts, CreateAndUpdateName, CrAndUpButton, BtnDiv, ExperienceForm, ExpInputBox, ExpInputDiv, EditCircle, SkillLi, NoProfile, SkillButton, ProUpdate, ProText, ProUpdateForm, ProInputBox, ProjectForm, ProjectVideo, OuterExps, EditRec, OuterPro, MainMobileDiv, SkillUl, ExpBody, ProjectDelete, ProSmall, ProjectMobileBody, ProjectMobileBodyTwo } from './Profile.styles';
import defaultt from '../../images/defaultt.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera,faPen,faTrash } from '@fortawesome/free-solid-svg-icons'
import { applyMiddleware } from 'redux';
import api from '../../API/Authentication';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DashBoard from '../Dashboard';

const Profile = () =>{

    const initialUserProfile = {id:0,first_name:"",second_name:"",bio:"",years_of_experience:0,image:"",user:0}
    
    
    const initialSkills = {skill:""}

    const params = useParams();

    const curUserId= useSelector(state=>state.user.id);
    const curUserName=useSelector(state=>state.user.username);
    const baseUrl= "https://res.cloudinary.com/chopwell/";


    
    const [userProfile,setUserProfile] = useState(initialUserProfile);
    const [userSkills,setUserSkills] = useState([]);
    const [userProjects,setUserProjects]= useState([]);
    const [userExperiences,setUserExperiences]= useState([]);
    const [loading,setLoading]= useState(true);
    const [isClient,setIsClient]=useState(false);
    const [hasProfile,setHasProfile]= useState(true);
    const [userType,setUserType]= useState(3);
    const [updateUser,setUpdateUser]=useState(false);

    const initialUpdateProfile={first_name:"",second_name:"",bio:"",years_of_experience:0}
    const [updateProfile,SetUpdateProfile]=useState(initialUpdateProfile);
    const [uploadImage,setUploadImage]=useState(null);

    const initialClientProfile={first_name:"",second_name:"",organization:""}
    const [clientProfile,SetClientProfile]=useState(initialClientProfile);

    const [dashBoard,setDashBoard]=useState({bids:0,executed:0});
    const [dashBoardClient,setDashBoardClient]=useState({gigs:0,executed:0});

    const [display,setDisplay]=useState('none');
    const [expDisplay,setExpDisplay]=useState('none');
    const [createSkill,setCreateSkill]=useState("");
    const [freelancerS,setFreelancerS]=useState(0);
    const [createExperience,setCreateExperience]=useState({title:"",experience:""});
    const [createProject,setCreateProject]=useState({about:"",link:"",github_link:""});
    const [updateProDisplay,setUpdateProDisplay]=useState('none');
    const [uploadVideo,setUploadVideo]=useState(null);
    const [proImages,setProImages]=useState(null);
    




    const getProfile= async() =>{
        
        try{
          const response= await api.get(`/profile/${params.id}/${params.username}/`,
          {
            /*headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            }*/
        });
          if(response.data.skills == null){
              setIsClient(true);
              setUserProfile(response.data.profile);
              setDashBoardClient({gigs:response.data.gigs,executed:response.data.executed});
              //console.log("data",response.data);
          }
          else{
            setUserProfile(response.data.profile);
            setDashBoard({gigs:response.data.bidCount,executed:response.data.successfulBids});
            console.log("data",response.data);
            setUserSkills(response.data.skills);
            if (response.data.skills.lenght>0){
                setFreelancerS(response.data.skills[0].freelancer);
            }else{
                setFreelancerS(response.data.profile.id);
            }
            setUserProjects(response.data.projects);
            setUserExperiences(response.data.experiences);
            

            SetUpdateProfile(prev=>({...prev,first_name:response.data.profile.first_name,second_name:response.data.profile.second_name,bio:response.data.profile.bio,years_of_experience:response.data.profile.years_of_experience}));
            console.log(updateProfile);
          }
          setHasProfile(true);
          setLoading(false);
          //console.log(response.data)
        }
        catch(err){
            if(err.response!=null){
                if(err.response.data.message=="false"){
                    setLoading(false);
                     setHasProfile(false);
                     //console.log(hasProfile);
                 }
            }
        }
    }

    const deleteSkill=async(e,id)=>{
        e.preventDefault();
        try{
            const response= await api.delete(`delete-skill/${id}/`,
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});
            
            getProfile();
            
            
        }
        catch(err){
              console.log(err.response.data);
        }
    }

    const deleteExperience=async(e,id)=>{
        e.preventDefault();
        try{
            const response= await api.delete(`delete-experience/${id}/`,
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});
            
            getProfile();
            
            
        }
        catch(err){
              console.log(err.response.data);
        }
    }

    const deleteProject=async(e,id)=>{
        e.preventDefault();
        try{
            const response= await api.delete(`delete-project/${id}/`,
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});
            
            getProfile();
            
            
        }
        catch(err){
              console.log(err.response.data);
        }
    }



    const update =async (e)=>{
        e.preventDefault();
        if(userType==1|| userType==0){
            setLoading(true);
        try{
            const response= await api.post('/api/chooseuser/',{userType:userType,iden:curUserId},
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});
            setUserType(3);
            getProfile();
            console.log(response.data)
            
        }
        catch(err){
              console.log(err.response);
        }
        }else{

            if(!updateUser && userProfile.first_name){
                setUpdateUser(true);
                return;
            }
            

            if(isClient){
                try{
                    const response= await api.patch(`update-client-profile/${userProfile.id}/`,clientProfile,
                {
                    headers: {
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    }}); 
                    getProfile();
                    setUpdateUser(false);
                } catch(err){
                    console.log(err.response);
                }
            }
            else{
                try{
                    const response= await api.patch(`update-profile/${userProfile.id}/`,updateProfile,
                {
                    headers: {
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    }});
                    getProfile();
                    setUpdateUser(false);
                }
                catch(err){
                   console.log(err.response);
                }
            }
        }
    }

    const SelectHandler=async(event)=>{
        console.log(event.target.files[0]);
        setUploadImage(event.target.files[0]);
        const data=new FormData()
        data.append("image",event.target.files[0]);
        if(isClient){
            try{
                const response= await api.patch(`/update-client-profile/${userProfile.id}/`,data,
                {
                    headers: {
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    }});
                
                getProfile();
                
                
            }
            catch(err){
                  console.log(err.response.data);
            }
        }else{
            try{
                const response= await api.patch(`/update-profile/${userProfile.id}/`,data,
                {
                    headers: {
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    }});
                
                getProfile();
                
                
            }
            catch(err){
                  console.log(err.response.data);
            }
        }
    }



     const ProjectFileHandler=async(event,id)=>{
        console.log(event.target.files[0]);
        const type=event.target.files[0].type;
        const projectFile= new FormData();
        if(type.slice(0,6)=="video/"){
            setUploadVideo(event.target.files[0]);
            projectFile.append("video",event.target.files[0]);
            try{
                const response= await api.post('/create-project-videos/',{project:id,projectFile},
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});

                try{
                    const res= await api.patch(`/update-project-videos/${response.data.id}/`,projectFile,
                {
                    headers: {
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    }});
                    
                    getProfile();
                    
                    
        
            } catch(err){
                console.log(err.res);
                    console.log(freelancerS);
            }
                
                getProfile();
                setUploadVideo(null);
                
    
        } catch(err){
            console.log(err.response.data);
                console.log(freelancerS);
        }
        }else{
           setProImages(event.target.files[0]);
           projectFile.append("image",event.target.files[0]);
           try{
            const response= await api.post('/create-project-images/',{project:id,projectFile},
        {
            headers: {
              'Authorization': `Token ${localStorage.getItem('token')}`
            }});
            
            try{
                const res= await api.patch(`/update-project-images/${response.data.id}/`,projectFile,
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }});
                
                getProfile();
                
                
    
        } catch(err){
            console.log(err.res);
                console.log(freelancerS);
        }
            
            getProfile();
            setUploadImage(null);
            

    } catch(err){
        console.log(err.response);
            console.log(freelancerS);
    }
        }
        
        
     }




    const AddSkill=async(e)=>{
        e.preventDefault();
        if(display=='none'){
            setDisplay('block')
        }else{
            try{
                const response= await api.post('/create-skill/',{freelancer:freelancerS,skill:createSkill},
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }}); 
                setDisplay('none');
                getProfile();
                

        } catch(err){
            console.log(err.response);
            console.log(createSkill);
                console.log(freelancerS);
        }
            }
    }

    const AddExperience=async(e)=>{
        e.preventDefault();
        if(expDisplay=='none'){
            setExpDisplay('block')
        }else{
            try{
                const response= await api.post('/create-experience/',{freelancer:freelancerS,title:createExperience.title,experience:createExperience.experience,date_of_work:"lol"},
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }}); 
                setExpDisplay('none');
                getProfile();
                

        } catch(err){
            console.log(err.response);
            console.log(createExperience);
                console.log(freelancerS);
        }
            }
    }


    const ProjectUpdate=async(e)=>{
        e.preventDefault();
        if(updateProDisplay=='none'){
            setUpdateProDisplay('block')
        }else{
            try{
                const response= await api.post('/create-project/',{freelancer:freelancerS,about:createProject.about,link:createProject.link,github_link:createProject.github_link},
            {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}`
                }}); 
                setUpdateProDisplay('none');
                getProfile();
                

        } catch(err){
            console.log(err.response);
                console.log(freelancerS);
        }
            }
    }
    

    
    useEffect(() =>{
     
        getProfile();
        console.log(loading);
        
       },[]);

    

       

       
    
     

    if(loading){
      return(
        <Wrapper>
        <ProfileDiv>
            <ProfileCon>
            <SkeletonProfilePic/>
              <ProfileContent>
                  <ProfileName>
                  <SkeletonShortText/>
                  </ProfileName>
                  <ProfileProfession>
                      <SkeletonText/>
                  </ProfileProfession>
                  <YearsOfExp><SkeletonTexts/></YearsOfExp>
              </ProfileContent>
            </ProfileCon>
            <MainMobileDiv>
            <PortfolioCon>
                <Skills>
                    <ul style={{marginLeft:'-10px'}}>
                        <li><SkeletonText/></li>
                        <li><small><SkeletonText/></small></li>
                        <li><small><SkeletonText/></small></li>
                        <li><small><SkeletonText/></small></li>
                    </ul>
                </Skills>
                <ExpAndPro>
                    <Experience>
                        <Exp>Experience</Exp>
                        <Exps>
                        <SkeletonShortText/>
                        <SkeletonText/>
                        </Exps>
                        <Exps>
                        <SkeletonShortText/>
                        <SkeletonText/>
                        </Exps>
                        <Exps>
                        <SkeletonShortText/>
                        <SkeletonText/>
                        </Exps>
                    </Experience>
                    <Project>
                        <Exp>
                            Projects
                        </Exp>
                        <Pro>
                        <SkeletonShortText/>
                        <SkeletonText/>
                        </Pro>
                    </Project>
                </ExpAndPro>
            </PortfolioCon>
            </MainMobileDiv>
        </ProfileDiv>
    </Wrapper>
      ); 
    }
    else{
       if(curUserId==params.id){
        return(
            <Wrapper>
        <ProfileDiv>
            
            
                  {hasProfile?
                  <>
                  <ProfileCon>
                      {uploadImage?<ProfilePic src={URL.createObjectURL(uploadImage)} alt="profilepic"/>:
                      <>
                      {
                          hasProfile?
                          <>
                          {
                            userProfile.image?
                            <ProfilePic src={baseUrl+userProfile.image} alt="profilepic"/>
                            :
                            <SkeletonProfilePic/>  
                          }
                          </>
                          :
                          userProfile.image?
                          <SkeletonProfilePic/>
                          :
                          <SkeletonProfilePic/>
                      }
                      </>
                      }
                  <ProfileContent>
                      {updateUser?
                      <div>
                      <div>
                      <ExpAndPro>
                          {
                              isClient?
                              <>
                              <CreateAndUpdateName placeholder='first name...'
                              onChange={(e)=>SetClientProfile(prev=>({...prev,first_name:e.target.value}))}
                              /><CreateAndUpdateName placeholder='second name...'
                              onChange={(e)=>SetClientProfile(prev=>({...prev,second_name:e.target.value}))}
                              />
                              </>
                              :
                              <>
                              <CreateAndUpdateName placeholder='first name...'
                              onChange={(e)=>SetUpdateProfile(prev=>({...prev,first_name:e.target.value}))}
                              /><CreateAndUpdateName placeholder='second name...'
                              onChange={(e)=>SetUpdateProfile(prev=>({...prev,second_name:e.target.value}))}
                              />
                              </>
                          }
                      </ExpAndPro>
                  </div>
                  <div>
                  {
                      isClient?
                      <></>
                      :
                      <CreateAndUpdateName placeholder='profession..'
                      onChange={(e)=>SetUpdateProfile(prev=>({...prev,bio:e.target.value}))}
                      />
                  }
                  </div>
                  <div>
                  {
                      isClient?
                      <></>
                      :
                      <CreateAndUpdateName placeholder='years of experience..'
                      onChange={(e)=>SetUpdateProfile(prev=>({...prev,years_of_experience:e.target.value}))}
                      />
                  }
                      </div>
                      </div>
                      :
                      <div>
                  <div>
                      {
                          !isClient?
                          <>
                          {userProfile.second_name && userProfile.first_name?<ProfileName>{userProfile.first_name} {userProfile.second_name}</ProfileName>:
                       <ExpAndPro><CreateAndUpdateName placeholder='first name...'
                       onChange={(e)=>SetUpdateProfile(prev=>({...prev,first_name:e.target.value}))}
                       /><CreateAndUpdateName placeholder='second name...'
                       onChange={(e)=>SetUpdateProfile(prev=>({...prev,second_name:e.target.value}))}
                       /></ExpAndPro>
                       
                       }
                       </>

                       :
                        <>
                       {userProfile.second_name && userProfile.first_name?<ProfileName>{userProfile.first_name} {userProfile.second_name}</ProfileName>:
                       <ExpAndPro><CreateAndUpdateName placeholder='first name...'
                       onChange={(e)=>SetClientProfile(prev=>({...prev,first_name:e.target.value}))}
                       /><CreateAndUpdateName placeholder='second name...'
                       onChange={(e)=>SetClientProfile(prev=>({...prev,second_name:e.target.value}))}
                       /></ExpAndPro>
                       }
                       </>
                      }
              </div>
              <div>
                  {
                  userProfile.bio?
                  <ProfileProfession>{userProfile.bio}</ProfileProfession>:
                  <>
                  {isClient?<></>
                  :
                  <CreateAndUpdateName placeholder='profession..'
                  onChange={(e)=>SetUpdateProfile(prev=>({...prev,bio:e.target.value}))}
                  />}
                  </>
                  }
              </div>
              <div>
                  {userProfile.years_of_experience?
                  <YearsOfExp>{userProfile.years_of_experience} years of experience</YearsOfExp>
                  :
                  <>
                  {
                      isClient?
                      <></>
                      :
                      <CreateAndUpdateName placeholder='years of experience..'
                  onChange={(e)=>SetUpdateProfile(prev=>({...prev,years_of_experience:e.target.value}))}
                  />
                  }
                  </>
                  }
                  </div>
                  </div>
                      }
                  
              <BtnDiv>
                  <CrAndUpButton onClick={update}><small>update</small></CrAndUpButton>
                  <CrAndUpButton ><input type="file" 
                  onChange={SelectHandler}
                  /><small style={{marginLeft:'17px'}}><FontAwesomeIcon icon={faCamera} /> +
                  </small></CrAndUpButton>
                  </BtnDiv>
                  </ProfileContent>
                  </ProfileCon> 
                  
                  
                 </>
                  :
                <ProfileCon>
               <SkeletonProfilePic/>
              <ProfileContent>
                  <NoProfile>choose a user type</NoProfile>
                  
              <ProfileName>
              <input type="radio" value="1" checked={userType==1} onChange={e=>setUserType(e.target.value)}></input><label>client</label>
          </ProfileName>
          <ProfileName>
              <input type="radio" value="0" checked={userType==0} onChange={e=>setUserType(e.target.value)} ></input><label>freelancer</label>

          </ProfileName>
          
          
          <BtnDiv>
                  <CrAndUpButton onClick={update}><small>update</small></CrAndUpButton>
                  <CrAndUpButton><small style={{marginLeft:'7px'}}><FontAwesomeIcon icon={faCamera} /> +
                  </small></CrAndUpButton>
                  </BtnDiv>
                  </ProfileContent>
                  </ProfileCon>
                }

                <MainMobileDiv>

                 {
                      isClient && hasProfile?
                      <DashBoard id={userProfile.id} client={false}
                       items={dashBoardClient.gigs} 
                       executed={dashBoardClient.executed}
                        iden={<>gigs</>} clickable={false} rate={true} 
                        userId={curUserId} name={curUserName}/>
                      :
                      <>
                      {
                          hasProfile?
                          <DashBoard id={userProfile.id} client={false} 
                      items={dashBoard.gigs} iden={<>bids</>} 
                      executed={dashBoard.executed} clickable={true} rate={true} 
                      userId={curUserId} name={curUserName}/>
                      :
                      <></>
                      }
                      
                      </>
                  }
            


            { isClient?<div></div>:
             <>
            <PortfolioCon>
                <Skills>
                    <div style={{marginTop:'0px',marginLeft:'30px',color:'#171716',fontSize:'17px',fontWeight:'bold'}}><small>Skills</small></div>
                    {userSkills?
                    <div>
                    <SkillUl>
                        <div>
                        {
                            
                            userSkills.map((item) => (
                            <SkillLi><small>{item.skill}</small><EditCircle onClick={(e)=>deleteSkill(e,item.id)}><FontAwesomeIcon icon={faTrash} /></EditCircle></SkillLi>
                            ))
                            
                            
                        }
                        </div>
                    </SkillUl>
                    <div style={{marginLeft:'0px',display:display}}>
                    {
                    <div><CreateAndUpdateName placeholder='skill'
                        onChange={(e)=>setCreateSkill(e.target.value)}
                        /></div>
                    }
                </div>
                </div>:
                    <div style={{marginLeft:'0px',display:display}}>
                    {
                    <div><CreateAndUpdateName placeholder='skill'
                        onChange={(e)=>setCreateSkill(e.target.value)}
                        /></div>
                    }
                </div>
                    }
                    <BtnDiv>
                  {
                      hasProfile?
                      <SkillButton onClick={AddSkill}><small>+</small></SkillButton>
                      :
                      <></>
                  }
                  </BtnDiv>
                </Skills>
                <ExpAndPro>
                    <Experience>
                        <Exp>Experience</Exp>
                        <div style={{marginTop:'5px',marginBottom:'30px'}}>
                            { userExperiences.length?
                            
                            <div>{userExperiences.map((item) => (
                                <OuterExps>
                                <Exps>
                                <p style={{fontSize:'15px',lineHeight:'50%',fontWeight:'bold'}}>{item.title}</p>
                                <ExpBody>{item.experience}</ExpBody>
                            </Exps>
                            <div  style={{fontSize:'15px',marginTop:'8px'}}><EditRec onClick={(e)=>deleteExperience(e,item.id)}><FontAwesomeIcon icon={faTrash} /></EditRec></div>
                            </OuterExps>
                            ))}
                            </div>
                            :
                            <Exps>
                            <small>add your former work experiences</small>
                            </Exps>
                            
                            
                        }
                            </div>
                        
                        <ExpInputDiv>
                            <div style={{display:expDisplay}}>
                            <ExperienceForm placeholder='job title...'
                            onChange={(e)=>setCreateExperience(prev=>({...prev,title:e.target.value}))}
                            />
                            <br/>
                            <br/>
                            <ExpInputBox placeholder='experience'
                            onChange={(e)=>setCreateExperience(prev=>({...prev,experience:e.target.value}))}
                            />
                            </div>
                            {
                                hasProfile?
                                <CrAndUpButton onClick={AddExperience}><small>create</small></CrAndUpButton>
                                :
                                <></>
                            }
                        </ExpInputDiv>
                    </Experience>
                    <Project>
                        <Exp>
                            Projects
                        </Exp>
                        <div>
                            {
                                userProjects.map((item)=>(
                            
                            <Pro>
                                <div style={{width:'100%'}}>
                            <ProjectMobileBody>
                            <small style={{fontWeight:'bold'}}>{item.about}</small>
                            <ProText><a href={item.link}>{item.link}</a></ProText>
                            <ProText><a href={item.github_link}>{item.github_link}</a></ProText>
                            </ProjectMobileBody>
                            

                            {item.project_videos.length || item.project_images.length?
                            <div>
                              {item.project_videos.length?<ProjectImage controls>
                             <source src={baseUrl+item.project_videos[0].video}></source>
                             </ProjectImage>:
                             <a href={baseUrl+item.project_images[0].image}>
                             <ProjectVideo src={baseUrl+item.project_images[0].image} alt="project"/>
                             </a>
                             }  
                            </div>
                            :
                            <div>
                            <ProSmall>
                                choose an image or a video of your project in absence of links,
                                ignore if there's no need.Make sure the video files are not too large,7Mb max for image,50Mb max for video.
                            </ProSmall>
                            <BtnDiv>
                            <CrAndUpButton ><input type="file" 
                  onChange={event=>ProjectFileHandler(event,item.id)} accept="video/*,image/*"
                  /><small style={{marginLeft:'17px'}}><FontAwesomeIcon icon={faCamera} /> +
                  </small></CrAndUpButton>
                        </BtnDiv>
                        </div>
                            }
                            <ProjectMobileBodyTwo>
                            <small style={{fontWeight:'bold'}}>{item.about}</small>
                            <ProText><a href={item.link}>{item.link}</a></ProText>
                            <ProText><a href={item.github_link}>{item.github_link}</a></ProText>
                            </ProjectMobileBodyTwo>
                            </div>
                            
                            <ProjectDelete>
                                <EditRec onClick={(e)=>deleteProject(e,item.id)}><FontAwesomeIcon icon={faTrash} /></EditRec>
                            </ProjectDelete>    
                        </Pro>
                        
                        
                                )

                                )
                            }
                        </div>
                         <div style={{display:updateProDisplay}}>
                        
                        <ProUpdateForm>
                        <ProInputBox placeholder='project detail'
                            onChange={(e)=>setCreateProject(prev=>({...prev,about:e.target.value}))}
                            />
                        <ProjectForm placeholder='project link...'
                            onChange={(e)=>setCreateProject(prev=>({...prev,link:e.target.value}))}
                            />
                        <ProjectForm placeholder='github link...'
                            onChange={(e)=>setCreateProject(prev=>({...prev,github_link:e.target.value}))}
                            />
                        </ProUpdateForm>
                        </div>
                        
                        <BtnDiv>
                        {
                            hasProfile?
                            <ProUpdate onClick={ProjectUpdate}><small>update</small></ProUpdate>
                            :
                            <></>
                        }
                        
                        </BtnDiv>

                    </Project>
                </ExpAndPro>
            </PortfolioCon>
            </>
            
       }
       </MainMobileDiv>

        </ProfileDiv>
    </Wrapper>
        );
       }
       else{
          return(
            <Wrapper>
            <ProfileDiv>
                <ProfileCon>
                <ProfilePic src={baseUrl+userProfile.image} alt="profilepic"/>
                  <ProfileContent>
                      <ProfileName>
                      {userProfile.first_name} {userProfile.second_name}
                      </ProfileName>
                      {
                          isClient?
                          <></>
                          :
                          <>
                      <ProfileProfession>
                        {userProfile.bio}
                      </ProfileProfession>
                      <YearsOfExp> {userProfile.years_of_experience} years of experience</YearsOfExp>
                      </>
                      }
                  </ProfileContent>
                </ProfileCon>

                <MainMobileDiv>
                <>
             {
                 isClient && curUserId?
                 <DashBoard id={userProfile.id} 
                 client={false} items={dashBoardClient.gigs} 
                 executed={dashBoardClient.executed} 
                 iden={<>gigs</>} clickable={false} rate={false} userId="" name=""/>
                 :
                 <>
                 {
                     curUserId?
                     <DashBoard id={userProfile.id} 
                     client={true} items={dashBoard.gigs} iden={<>bids</>} 
                     executed={dashBoard.executed} clickable={false} rate={false} userId="" name=""/>
                     :
                     <></>
                 }
                 </>
             }
            </>
                <PortfolioCon>
                    {
                        isClient?
                        <></>
                        :
                        <Skills>
                    <div style={{marginTop:'0px',marginLeft:'30px',color:'#171716',fontSize:'17px',fontWeight:'bold'}}><small>Skills</small></div>
                        <ul style={{marginLeft:'-10px'}}>
                        {
                            
                            userSkills.map((item) => (
                            <SkillLi><small>{item.skill}</small></SkillLi>
                            ))
                            
                            
                        }
                        </ul>
                    </Skills>
                    }
                    {
                        isClient?
                        <></>
                        :
                        <ExpAndPro>
                        <Experience>
                            <Exp>Experience</Exp>
                            {userExperiences.map((item) => (
                                <Exps>
                                <p style={{fontSize:'15px',lineHeight:'50%',fontWeight:'bold'}}>{item.title}</p>
                                <ExpBody>{item.experience}</ExpBody>
                            </Exps>
                            ))}
                            
                        </Experience>
                        <Project>
                            <Exp>
                                Projects
                            </Exp>
                            <div>
                            {
                                userProjects.map((item)=>(
                            <Pro>
                            <ProjectMobileBody>
                            <small style={{fontWeight:'bold'}}>{item.about}</small>
                            <ProText><a href={item.link}>{item.link}</a></ProText>
                            <ProText><a href={item.github_link}>{item.github_link}</a></ProText>
                            </ProjectMobileBody>
                            {item.project_videos.length || item.project_images.length?
                            <div>
                              {item.project_videos.length?<ProjectImage controls>
                             <source src={baseUrl+item.project_videos[0].video}></source>
                             </ProjectImage>:
                             <ProjectVideo src={baseUrl+item.project_images[0].image} alt="project"/>

                             }  
                            </div>
                            :
                            <div></div>
                            }
                            <ProjectMobileBodyTwo>
                            <small style={{fontWeight:'bold'}}>{item.about}</small>
                            <ProText><a href={item.link}>{item.link}</a></ProText>
                            <ProText><a href={item.github_link}>{item.github_link}</a></ProText>
                            </ProjectMobileBodyTwo>
                            </Pro>
                            

                                ))}
                             </div>
                        </Project>
                    </ExpAndPro>
                    }
                </PortfolioCon>
                </MainMobileDiv>
            </ProfileDiv>
        </Wrapper>
          );
       }
    }
    
}
export default Profile;