import React,{useRef,useState,useEffect} from 'react';
import {Wrapper,RegisterCard,HeaderRegister,RegisterDiv,InputBox,RegisterLabel,RegisterButton,UserErrorMsg,UserNoErrorMsg,RegMsg,NoRegMsg,RegMssg,LoginText} from './Register.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import api from '../../API/Authentication';
import { Link,useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector,useDispatch } from 'react-redux';
import { saveUserDetails } from '../../actions';

const Register = () => {
   const [username,setUsername] = useState('');
   const [validName, setValidName] = useState(false);
   const [userFocus, setUserFocus] = useState(false);

   const dispatch= useDispatch();

   const [email,setEmail] = useState('');
   const [validEmail, setValidEmail] = useState(false);
   const [EmailFocus, setEmailFocus] = useState(false);
   const navigate=useNavigate();

   const [password,setPassword] = useState('');
   const [validPwd, setValidPwd] = useState(false);
   const [pwdFocus, setPwdFocus] = useState(false);

   const [error,setError] = useState(' 4 or more characters needed');
   const [Pwderror,setPwdError] = useState(' 4 or more characters including atleast a lowercase and uppercase and a number');

   const [SubmitMsg,setSubmitMsg] = useState('you have successfully registered bro!');
   const [submission,setSubmission]= useState(false);
   const [submitError,setSubmitError] = useState(false);

   const userRegex = /^[A-z][A-z0-9-_]{3,23}$/;
   const pwdRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
   const [loading,setLoading] = useState(false);

   useEffect(() => {
    if(userRegex.test(username)){
        setValidName(true);
        //console.log(username);
    }
    else{
        setValidName(false);
        
        
    }
}, [username])

useEffect(() => {
    if(pwdRegex.test(password)){
        setValidPwd(true);
        //console.log(username);
    }
    else{
        setValidPwd(false);
        
    }
}, [password])

const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    try{
        
       const response= await api.post('/api/register/',{username:username,email:email,password:password});
       setSubmitMsg(response.data.message);
       //console.log(response.data);
       setLoading(false);
       setSubmission(true);
       setSubmitError(false);

       if(localStorage.getItem('token')==null){
        localStorage.setItem('token',response.data.token);
    } else{
        localStorage.clear();
        localStorage.setItem('token',response.data.token)
    }

    dispatch(saveUserDetails(response.data.user));
    navigate(`/profile/${response.data.user.id}/${response.data.user.username}`)

    } catch(err){
        setLoading(false);
        if(err.response.data.username==null){
         setSubmitMsg(err.response.data.email[0]);
         setSubmission(false);
         setSubmitError(true);
        } else{
            setSubmitMsg(err.response.data.username[0]);
            setSubmission(false);
            setSubmitError(true);
        }
        
         

    }
    

}



   return(
      <Wrapper>
          <RegisterCard>
              <HeaderRegister><FontAwesomeIcon icon={faUserCircle} /></HeaderRegister>
              {
                  submission? <RegMsg><p>{SubmitMsg}</p></RegMsg>: <NoRegMsg></NoRegMsg>
              }
              {
                submitError? <RegMssg><p>{SubmitMsg}</p></RegMssg>:<NoRegMsg></NoRegMsg>
              }
              <RegisterDiv>
                  <RegisterLabel for="fname">Username</RegisterLabel>
                  <InputBox type="text" id="fname" name="username" 
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                  value={username}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  placeholder="Your username.."/>
                  {!validName && userFocus?
                      <UserErrorMsg><small id="uidnote" >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      {error}
                  </small></UserErrorMsg>:<UserNoErrorMsg></UserNoErrorMsg>
                  }

            <RegisterLabel  for="femail">Email</RegisterLabel>
            <InputBox type="email" id="femail" name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email.."/>

                  <RegisterLabel for="fpassword">Password</RegisterLabel>
                  <InputBox type="password" id="fpassword" name="password" 
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  value={password}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  placeholder="Your password.."/>
                  {!validPwd && pwdFocus?
                      <UserErrorMsg><small id="uidnote" >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      {Pwderror}
                  </small></UserErrorMsg>:<UserNoErrorMsg></UserNoErrorMsg>
                  }
                  <RegisterButton disabled={!validName || !validPwd ? true : false} onClick={handleSubmit}>{ loading ? <ClipLoader color={'#36D7B7'} loading={loading}  size={20} />
                  :<div>Register</div>}</RegisterButton>
                   <LoginText>Already registered?,<Link to='/login' style={{color:'#056ffa', textDecoration:'none'}} >login</Link></LoginText>
              </RegisterDiv>
          </RegisterCard>
      </Wrapper>
   );

}

export default Register;