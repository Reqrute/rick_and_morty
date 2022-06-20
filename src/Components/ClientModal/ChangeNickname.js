import { useDispatch } from 'react-redux'
import { useState } from "react"; 
import { setUser } from '../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useAuth } from '../../Constants/use-auth';
import React from 'react';

 const ChangeNickname = () => {
  const dispatch = useDispatch();

  const {password , email} = useAuth(); 
  const [name, setName] = useState('');
  const [pass, setPass] = useState(''); 
  
    const handleChangeNickname =  () => {
      const auth = getAuth();
      dispatch(setUser({
            name: name,
        }));
        sessionStorage.setItem( 'Name' , name);
        signInWithEmailAndPassword(auth , email, password);
        window.location.reload();
}

  return (  
<div className="modal fade" id="ChangeNicknameModal" tabIndex="-1" aria-labelledby="ChangeNicknameModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="ChangeNicknameModalLabel">ChangeNickname</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="mb-3">
          <label htmlFor="NicknameCE" className="col-form-label">Write new Nickname:</label>
          <input 
          type="text" 
          className="form-control" 
          id="NicknameCE"        
          value={name} 
          onChange = {(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
          <label htmlFor="PasswordNC" className="col-form-label">Password:</label>
          <input 
          type = "password" 
          className="form-control" 
          id="PasswordNE"        
          value={pass} 
          onChange = {(e) => setPass(e.target.value)}/>
         { pass !== '' ? (password !== pass ?  ( <p 
          className='text-danger text-center mt-3' 
          > Uncorrect password !!!</p>
          ): (
            <p 
          className='text-success text-center mt-3' 
          > Correct password !!!</p>
          )) : null
          }
          </div>
        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {password === pass ? (
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleChangeNickname()}>ChangeNickname</button>
            ) : (
                <button type="button" className="btn btn-primary"  disabled>ChangeNickname</button>
            )}
      </div>
    </div>
  </div>
</div>
  )
}
export {ChangeNickname}