import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../Constants/use-auth";
import { removeAll } from "../../store/slices/sideSlice";
import { useDispatch } from "react-redux";
import {removeUSer} from '../../store/slices/userSlice';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase";
import "../../App/App.css";

const Header = () => {
  const {isAuth , email, favorite} = useAuth();
  const dispatch = useDispatch();

  async function handleSend () {
     await setDoc(doc(db, "emails" , email), {
      email: email,
      favorite:  JSON.stringify(favorite),
    });
}
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4  ">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu" onClick={() => dispatch(removeAll())}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="" width={'200px'}/>
        </Link>
        <style>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-dark"></span>
          <span className="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
            <NavLink
              className="nav-link"
              to="/location"
            >
              Location
            </NavLink>

            <li className="nav-item dropdown ">
          <p className="nav-link " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </p>
          <ul className="dropdown-menu dropdown-menu-end">
          { isAuth && (
           <> 
            <li> 
              <Link to="/profile" className="navbar-brand fs-6 dropdown-item">
                Profile
              </Link>
            </li>
            <li><hr className="dropdown-divider"/></li>
          </>
            )}
            { isAuth ?  (
              <li><button type="button" className="btn btn-primary dropdown-item" data-bs-toggle="modal" data-bs-target="#LoginModal" >Login in other account</button></li>
            ) : (  <> 
              <li><button type="button" className="btn btn-primary dropdown-item" data-bs-toggle="modal" data-bs-target="#LoginModal" >Login</button></li>
            <li><button type="button" className="btn btn-primary dropdown-item" data-bs-toggle="modal" data-bs-target="#RegisterModal" >Sign up</button></li>
          </>)}
            
            { isAuth && (
           <> 
            <li><hr className="dropdown-divider"/></li>
            <li> 
              <Link to="/" style={{ textDecoration: 'none' }}>
                <button 
                type="button" 
                className="btn btn-danger dropdown-item" 
                onClick={() => {dispatch(removeUSer());
            sessionStorage.clear();
             handleSend();
            }}
            >
            Quit
                </button>
              </Link>
            </li>
          </>
            )}
          </ul>
        </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header ;