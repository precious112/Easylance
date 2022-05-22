import React,{useRef,useState,useEffect} from 'react';
import {Wrapper,LoginCard,HeaderLogin,LoginDiv,InputBox,LoginLabel,LoginButton,UserErrorMsg,Message,ErrorMessage,NoContent,RegisterText} from './Login.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import api from '../../API/Authentication';
import { Link,useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector,useDispatch } from 'react-redux';
import { saveUserDetails,saveCurMessage } from '../../actions';


const Login = () => {
    const initialCredentials = {username:"",password:""}
    const initialErrors = {userError:"4 or more characters needed",pwdError:"4 or more characters including atleast a lowercase and uppercase and a number",subError:""}

    const [credentials,setCredentials] = useState(initialCredentials);
    const [errors,setErrors]= useState(initialErrors);
    const [message,setMessage] = useState("");
    const navigate=useNavigate();

    const dispatch= useDispatch();

    const [validName,setValidName]= useState(false);
    const [validPwd,setValidPwd]= useState(false);
    const [validSub,setValidSub]= useState(false);
    const [errr,setErrr] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [loading,setLoading] = useState(false);

    
    const userRegex = /^[A-z][A-z0-9-_]{3,23}$/;
    const pwdRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    useEffect(() => {
        if(pwdRegex.test(credentials.password)){
            setValidPwd(true);
            
        }
        else{
            setValidPwd(false);
            
            
        }
        if(userRegex.test(credentials.username)){
            setValidName(true);
        }
        else{
            setValidName(false);
        }
    }, [credentials])

    const handleSubmit= async (e) =>{
        e.preventDefault();
        setLoading(true);
        try{
            const response= await api.post('/api/login/',{username:credentials.username,password:credentials.password});
            setMessage(response.data.message);
            setLoading(false);
            setValidSub(true);
            setErrr(false);
            if(localStorage.getItem('token')==null){
                localStorage.setItem('token',response.data.token);
            }
            else{
                localStorage.clear();
                localStorage.setItem('token',response.data.token)
            }
            dispatch(saveUserDetails(response.data.user));
            const state={
                senderImage:"",
                receiverImage:"",
                receiverFirstName:"",
                receiverLastName:"",
                chats:[]
            }
            dispatch(saveCurMessage(state));
            //console.log(response.data.user);
            navigate(`/home/${response.data.user.id}/${response.data.user.username}`)
        }
        catch(err){
            if(err.response.data==null){
                //console.log("error");
            }
            else{
              setErrors(prev =>({...prev,subError:err.response.data.non_field_errors}));
            }
            
            setLoading(false);
            setErrr(true);
            setValidSub(false);
      }

        
    }


    return (<Wrapper>
        <LoginCard>
            <HeaderLogin><FontAwesomeIcon icon={faUserCircle} /></HeaderLogin>
            {
                validSub? <Message>{message}</Message>:<NoContent></NoContent>
            }
            {
                errr? <ErrorMessage>{errors.subError}</ErrorMessage>:<NoContent></NoContent>
            }
            <LoginDiv>
            <LoginLabel  for="fname">Username</LoginLabel>
            <InputBox type="text" id="fname"
            onChange={(e) => setCredentials(prev =>({...prev,username:e.target.value}))}
            value={credentials.username}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            name="firstname" placeholder="Your username.."/>
            {!validName && userFocus?
                      <UserErrorMsg><small id="uidnote" >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      {errors.userError}
                  </small></UserErrorMsg>:<NoContent></NoContent>
                  }
            
            <LoginLabel  for="fpassword">Password</LoginLabel>
            <InputBox type="password" id="fpassword" 
            onChange={(e) => setCredentials(prev =>({...prev,password:e.target.value}))}
            value={credentials.password}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            name="password" placeholder="Your password.."/>
            {!validPwd && pwdFocus?
                      <UserErrorMsg><small id="uidnote" >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      {errors.pwdError}
                  </small></UserErrorMsg>:<NoContent></NoContent>
                  }
            <LoginButton disabled={!validName || !validPwd ? true : false} onClick={handleSubmit}>{ loading ? <ClipLoader color={'#36D7B7'} loading={loading}  size={20} />
            : <div>Login</div>}</LoginButton>
            <RegisterText>Not registered?,<Link to='/register' style={{color:'#056ffa', textDecoration:'none'}} >Sign In</Link></RegisterText>
            </LoginDiv>
        </LoginCard>
    </Wrapper>);
}

export default Login;