import { useDispatch } from 'react-redux'
import { useState } from "react"; 
import { getAuth, updatePassword, reauthenticateWithCredential, signInWithEmailAndPassword} from "firebase/auth";
import { setUser } from '../../store/slices/userSlice';
import { useAuth } from '../../Constants/use-auth';
import React from 'react';

 const ChangePassword = () => {
  const dispatch = useDispatch();
  const [pass1, setPass1] = useState(''); 
  const [pass2, setPass2] = useState(''); 
  const [pass3, setPass3] = useState(''); 
  const {password, email} = useAuth(); 

  
    const  handleChangePassword = (pass) => {
        const auth = getAuth();
        const user = auth.currentUser;
        const credential = signInWithEmailAndPassword(auth , email, password);
        reauthenticateWithCredential(user,credential);
        updatePassword(user, pass);
        sessionStorage.setItem( 'Password' , pass);
        dispatch(setUser({
            password : pass,
        }))
        
}

  return (  
<div className="modal fade" id="ChangePasswordModal" tabIndex="-1" aria-labelledby="ChangePasswordModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="ChangePasswordModalLabel">ChangePassword</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="mb-3">
        <label htmlFor="PasswordL1" className="col-form-label">Password:</label>
          <input 
          type = "password" 
          className="form-control" 
          id="PasswordCP1"        
          value={pass1} 
          onChange = {(e) => setPass1(e.target.value)}/>
        { password !== pass1 ? (
            <p 
          className='text-primary text-center mt-3' 
          > Password Uncorrect !!!</p>
          ) : <p 
          className='text-primary text-center mt-3' 
          > Password Correct !!!</p>}
          </div>
          <div className="mb-3">
        <label htmlFor="PasswordL" className="col-form-label">Password:</label>
          <input 
          type = "password" 
          className="form-control" 
          id="PasswordCP2"        
          value={pass2} 
          onChange = {(e) => setPass2(e.target.value)}/>
           {pass2.length < 6 ? (
            <p 
          className='text-primary text-center mt-3' 
          > password less that 6</p>
          ) : null}
          </div>
         
          <div className="mb-3">
          <label htmlFor="PasswordL" className="col-form-label">Password:</label>
          <input 
          type = "password" 
          className="form-control" 
          id="PasswordCP3"        
          value={pass3} 
          onChange = {(e) => setPass3(e.target.value)}/>
            {pass2 !== pass3 ?  ( <p 
          className='text-primary text-center mt-3' 
          >  passwords not equal </p>
          ): pass3.length < 6 ? (
            <p 
          className='text-primary text-center mt-3' 
          > password less that 6</p>
          ) : (
            <p 
          className='text-primary text-center mt-3' 
          > Passwords Correct !!!</p>
          )
          }
          </div>
        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        { password === pass1 && pass2 === pass3 && pass3.length >= 6 ? (
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleChangePassword(pass3)}>ChangePassword</button>
            ) : (
                <button type="button" className="btn btn-primary"  disabled>ChangePassword</button>
            )}
      </div>
    </div>
  </div>
</div>
  )
}
export {ChangePassword}