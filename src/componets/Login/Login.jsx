import React,{ useState} from 'react';
import './Login.css'
import Logo from '../../assets/twitter-logo.svg'

const Login = ({uselogin,login}) => {

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

const params={
  username: userName,
  password: password
}
  return (
    <>
      <div className='container'>

        <div className='d-flex flex-column align-items-center gap-4'>
          <img src={Logo} alt="" />
          <h2 className='text-center'>Log in to Twitter</h2>
          <input className='twitter-logo' value={userName} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder='Phone number, email address' />
          <input className='twitter-pssword' value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Password' />
          <button className='btn-Login' onClick={()=> uselogin(params)}>Log In</button>
        </div>

      </div>
    </>
  );
};

export default Login;