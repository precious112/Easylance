import React,{useEffect, useState} from 'react';
import {Wrapper,NavBar,LogoBar,LoginButton,LandingBody,LandingText,GetStarted,LandingPicture,LandingIcons,Icons,SmallText, HamburgerMenu, MenuActive, MenuItemsActive} from './LandingPage.styles';
import thumbsUp from '../../images/thumbsUp.svg';
import basicgem from '../../images/basicgem.svg';
import basicshape from '../../images/basicshape.svg';
import basicjell from '../../images/basicjell.svg';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LandingPage = () => {
    const [show,setShow]=useState("none");
    const curUserId= useSelector(state=>state.user.id);
    const curUserName= useSelector(state=>state.user.username);
    const navigate=useNavigate();

    useEffect(()=>{
       if(curUserId&&curUserName&&localStorage.getItem('token')){
        navigate(`/home/${curUserId}/${curUserName}`)
       }
    },[curUserId,curUserName]);

    const showMenu=()=>{
        if(show=="none"){
            setShow("show");
        }else{
            setShow("none");
        }
    }

        return(
            <Wrapper>
        <NavBar>
            <LogoBar>Easylance</LogoBar>
            <Link to='/login' style={{ textDecoration: 'none' }}>
            <LoginButton>login</LoginButton>
            </Link>
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
                <Link to='/register' style={{ textDecoration: 'none',color:'white' }}>
                    signup
                </Link>
                </MenuItemsActive>
                <MenuItemsActive>
                <Link to='/login' style={{ textDecoration: 'none',color:'white' }}>
                    login
                </Link>
                </MenuItemsActive>
            </MenuActive>
        </NavBar>
        <LandingBody>
            <LandingText>
                <LandingIcons>
                    <Icons src={basicgem} alt="ok"/>
                    <Icons src={basicshape} alt="ok"/>
                </LandingIcons>
                <h1 style={{ fontSize:'40px' }}>Easylance makes freelancing<br/> less a hassle.</h1>
                <SmallText>
                    No one says you can't have a freelancing platform as easy to join and use like <br/> a regular social media platform,join today and never have to worry about getting gigs.
                </SmallText>
                <Link to='/register' style={{ textDecoration: 'none' }}>
                <GetStarted><p>get started</p></GetStarted>
                </Link>
                <LandingIcons>
                    <Icons src={basicshape} alt="ok"/>
                    <Icons src={basicjell} alt="ok"/>
                </LandingIcons>
            </LandingText>
            <LandingPicture src={thumbsUp} alt="ok"/>
        </LandingBody>
        </Wrapper>
    
        );
    
        };
    
    export default LandingPage;