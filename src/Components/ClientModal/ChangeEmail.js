import { useDispatch } from 'react-redux'
import { useState } from "react"; 
import { getAuth, updateEmail, reauthenticateWithCredential , signInWithEmailAndPassword} from "firebase/auth";
import { setUser } from '../../store/slices/userSlice';
import { useAuth } from '../../Constants/use-auth';
import React from 'react';

 const ChangeEmail = () => {
  const dispatch = useDispatch();

  const {password,email} = useAuth(); 
  const [emails, setEmail] = useState('');
  const [pass, setPass] = useState(''); 
  
    const  handleChangeEmail = (emails) => {
        const auth = getAuth();
        const user = auth.currentUser;
        const credential = signInWithEmailAndPassword(auth , email, password);
        reauthenticateWithCredential(user, credential);

        updateEmail(auth.currentUser, emails);
        dispatch(setUser({
            email: emails
        }))

        sessionStorage.setItem( 'Email' , emails);
        
}

  return (  
<div className="modal fade" id="ChangeEmailModal" tabIndex="-1" aria-labelledby="ChangeEmailModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="ChangeEmailModalLabel">ChangeEmail</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="mb-3">
          <label htmlFor="EmailL" className="col-form-label">Write new Email:</label>
          <input 
          type="email" 
          className="form-control" 
          id="EmailCE"        
          value={emails} 
          onChange = {(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
          <label htmlFor="PasswordL" className="col-form-label">Password:</label>
          <input 
          type = "password" 
          className="form-control" 
          id="PasswordCE"        
          value={pass} 
          onChange = {(e) => setPass(e.target.value)}/>
         {password !== pass ?  ( <p 
          className='text-primary text-center mt-3' 
          > Uncorrect password !!!</p>
          ): (
            <p 
          className='text-primary text-center mt-3' 
          > Correct password !!!</p>
          )
          }
          </div>
        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {password === pass ? (
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleChangeEmail(emails)}>ChangeEmail</button>
            ) : (
                <button type="button" className="btn btn-primary"  disabled>ChangeEmail</button>
            )}
      </div>
    </div>
  </div>
</div>
  )
}
export {ChangeEmail}