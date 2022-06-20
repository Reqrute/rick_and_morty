import {useNavigate} from 'react-router-dom' 
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../store/slices/userSlice';

 const SignUp = () => {
    const dispatch = useDispatch();
    const push = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState(''); 
    const [name, setName] = useState(''); 

    const  handleRegister = (email, password) => {
      const auth = getAuth();
      console.log(auth);
      createUserWithEmailAndPassword(auth,email,password)
            .then(({user})=>{
              dispatch(setUser({
                email: user.email,
                id: user.uid,
                token:user.accessToken,
                password: password, 
                name : name,
              }));
              sessionStorage.setItem( 'Email' , user.email);
              sessionStorage.setItem( 'id' , user.id);
              sessionStorage.setItem( 'Token' , user.accessToken);
              sessionStorage.setItem( 'Password' , password);
              sessionStorage.setItem( 'Name' , name);
              push('/');
            })
            .catch(console.error)

}

  return (
<div className="modal fade" id="RegisterModal" tabIndex="-1" aria-labelledby="RegisterModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="RegisterModalLabel">Registration</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
          <label htmlFor="TextR" className="col-form-label">Nickname:</label>
          <input 
          type="text" 
          className="form-control" 
          id="TextR"        
          value={name} 
          onChange = {(e) => setName(e.target.value)} />
          </div>
      <div className="mb-3">
          <label htmlFor="EmailR" className="col-form-label">Email:</label>
          <input 
          type="email" 
          className="form-control" 
          id="EmailR"        
          value={email} 
          onChange = {(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
          <label htmlFor="PasswordR" className="col-form-label">Password:</label>
          <input 
          type = "password" 
          className="form-control " 
          id="PasswordR"        
          value={pass} 
          onChange = {(e) => setPass(e.target.value)}/>
          {pass.length < 6 ? (
            <p 
          className='text-primary text-center mt-3' 
          > password less that 6</p>
          ) : null}
          <p 
          className='text-primary text-center mt-3' 
          style={{ cursor: "pointer" }}
          data-bs-toggle="modal" 
          data-bs-target="#LoginModal"
          > Already have an account? </p>
          </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         { pass.length >=6 ? (<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleRegister(email, pass)}>Sing up</button>)
        : (<button type="button" className="btn btn-primary" disabled>Sing up</button>)}
      </div>
    </div>
  </div>
</div>
  )
}

export {SignUp}