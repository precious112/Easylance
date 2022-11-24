import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useRef,useState,useEffect} from 'react';
import { faMessage,faBell,faUser } from '@fortawesome/free-regular-svg-icons'
import { HamburgerMenu, Logo, LogoutButton, MenuBar, MenuItems,MenuActive, MenuItemsActive, UserAvatar, UserTabs, Wrapper, NavWrapper, MessageCountSpan } from './NavBar.styles';
import profilepicc from '../../images/profilepicc.jpg'
import { Link,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import api from '../../API/Authentication';

const NavBar=(props)=>{
    const baseUrl= "https://res.cloudinary.com/chopwell/";
    const [show,setShow]=useState("none");
    const navigate=useNavigate();
    const [lastMessages,setLastMessages]=useState([]);
    const [messageCount,SetMessageCount]=useState(0);
    const showMenu=()=>{
        if(show=="none"){
            setShow("show");
        }else{
            setShow("none");
        }
    }

    
    const logOut=async(e)=>{
        e.preventDefault();
        try{
            const response= await api.post(`/api/logout/`,{},
            {
              headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
              }});
              localStorage.clear();
              navigate(`/login`)
        }
        catch(err){

        }
    }

    const [activeOne,setActiveOne]=useState("#1260fc");
    const [activeTwo,setActiveTwo]=useState("");
    const [activeThree,setActiveThree]=useState("");
    const [activeFour,setActiveFour]=useState("");
    const userName=useSelector(state=>state.user.username);
    const userId=useSelector(state=>state.user.id);

    const getLastMessages = async()=>{
        try{
         const response= await api.get(`/chat/${userId}/`,
         {
            params:{
                ordering:'-date_created'
            },
           headers: {
             'Authorization': `Token ${localStorage.getItem('token')}`
           }});
           console.log(response.data.messages);
           setLastMessages(response.data.messages);
 
        } catch(err){
           console.log(err.response.data);
        }
     }

     useEffect(()=>{
       getLastMessages();
     },[])

     useEffect(()=>{
        
       if(lastMessages.length>0){
           for(let i=0;i<lastMessages.length;i++){
               console.log(lastMessages[i].new_msgs);
               if(lastMessages[i].new_msgs>0){
                   SetMessageCount(messageCount+lastMessages[i].new_msgs);
               }
           }
           console.log(messageCount);
       }
     },[lastMessages])


    
    return(
        <NavWrapper>
        <Wrapper>
            <Logo>Easylance</Logo>
            <MenuBar>
            <Link to={`/home/${userId}/${userName}`}>
            <MenuItems active={activeOne}>
            <i class="fa fa-home"></i>
            </MenuItems>
            </Link>
            <Link to={`/chat/${userId}`} style={{textDecoration:'none'}}>
            <MenuItems active={activeTwo}>
            <FontAwesomeIcon icon={faMessage} />
            </MenuItems>
            {
                messageCount?
                <MessageCountSpan>{messageCount}</MessageCountSpan>
                :
                <></>
            }
        </Link>
            <div style={{padding:'20px',display:'inline'}}></div>
            <Link to={`/profile/${userId}/${userName}`}>
            <MenuItems active={activeFour}>
            <FontAwesomeIcon icon={faUser} />
            </MenuItems>
            </Link>
            </MenuBar>
            <UserTabs>
             <UserAvatar src={baseUrl+props.image}  alt="pic"/>
             <LogoutButton onClick={logOut}>logout</LogoutButton>
            </UserTabs>
            <HamburgerMenu onClick={showMenu}>
            {
                    show=="none"?
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    :
                    <i class="fa fa-times" aria-hidden="true"></i>
                }
            </HamburgerMenu>
            <MenuActive className={show}>
                <MenuItemsActive>
                <UserAvatar src={baseUrl+props.image}  alt="pic"/>
                <LogoutButton onClick={logOut}>logout</LogoutButton>
                </MenuItemsActive>
                <MenuItemsActive>
                <Link to={`/home/${userId}/${userName}`} style={{ textDecoration: 'none' }}>
                    Home
                </Link>
                </MenuItemsActive>
                <MenuItemsActive>
                {<Link to={`/chat/${userId}`} style={{ textDecoration: 'none' }}>
                    Chat
            </Link>}
                 
                </MenuItemsActive>
                <MenuItemsActive>
                <Link to={`/profile/${userId}/${userName}`} style={{ textDecoration: 'none' }}>
                    Profile
                </Link>
                </MenuItemsActive>
            </MenuActive>
        </Wrapper>
        </NavWrapper>
    );
}
export default NavBar;