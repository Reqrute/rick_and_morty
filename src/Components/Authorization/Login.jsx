import { useDispatch } from 'react-redux'
import { useState } from "react";
import {useNavigate} from 'react-router-dom' 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { setUser } from '../../store/slices/userSlice';
import React from 'react';

 const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState(''); 
  
    const  handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth , email, password)
        .then(({user})=>{
          console.log(user);
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token:user.accessToken,
          }));
          push('/');
        })
            .catch(() => alert('Invalid User!'))
}

  return (  
<div className="modal fade" id="LoginModal" tabIndex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="LoginModalLabel">Login</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="mb-3">
          <label htmlFor="EmailL" className="col-form-label">Email:</label>
          <input 
          type="email" 
          className="form-control" 
          id="EmailL"        
          value={email} 
          onChange = {(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
          <label htmlFor="PasswordL" className="col-form-label">Password:</label>
          <input 
          type = "password" 
          className="form-control" 
          id="PasswordL"        
          value={pass} 
          onChange = {(e) => setPass(e.target.value)}/>
          <p 
          className='text-primary text-center mt-3' 
          style={{ cursor: "pointer" }}
          data-bs-toggle="modal" 
          data-bs-target="#RegisterModal"
          > Sign up for Rick & Morty </p>
          </div>
        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleLogin(email, pass)}>Login</button>
      </div>
    </div>
  </div>
</div>
  )
}
export {Login}