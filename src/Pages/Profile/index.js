import React ,{useEffect , useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import Card from "../../Components/Cards/Card";
import { useAuth } from '../../Constants/use-auth';
import { ChangeEmail } from '../../Components/ClientModal/ChangeEmail';
import { ChangePassword } from '../../Components/ClientModal/ChangePassword';
import { removeUSer } from '../../store/slices/userSlice';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase";


export default function Profile() {
    const {favorite,email} = useAuth();
    const [result , setResult]= useState([]);
    const dispatch = useDispatch();

    
  async function handleSend () {
    await setDoc(doc(db, "emails" , email), {
     email: email,
     favorite:  JSON.stringify(favorite),
   });
}

    useEffect(() => {
        (async function () {
          let f = favorite.filter((id) => typeof(id) === "number");
          let a = await Promise.all(
            f.map(async (x) => {
             return await fetch(`https://rickandmortyapi.com/api/character/${x}`).then((res) => res.json());
            })
          );  
          setResult(a);
          sessionStorage.setItem("Favorite", JSON.stringify(f));
        })();
      }, [favorite]);

  return (
    <div className="App">
    <ChangeEmail/>
    <ChangePassword/>
        <h1 style={{color : "white"}} className="text-center mb-3">Favorite characters</h1>

        <div className="container">
          <div className="row">
          <div className="col-lg-3 col-12 mb-5">
            <div style={{color : "white"}} className="text-center fw-bold fs-4 mb-2">Menu</div>
            <div
             className="accordion" id="accordionExample">
            <div  style={{ border: "2px solid #0b5ed7"}} className="accordion-item">
            <div className="list-group">
              <button 
              type="button" 
              className="list-group-item list-group-item-action text-center"
              data-bs-toggle="modal" 
              data-bs-target="#ChangeEmailModal"
              >Change email
              </button>

              <button 
              type="button" 
              className="list-group-item list-group-item-action text-center"
              data-bs-toggle="modal" data-bs-target="#ChangePasswordModal"
              >Change password
              </button>

            <Link to="/" style={{ textDecoration: 'none' }}>
            <button type="button" className="btn btn-danger list-group-item list-group-item-action text-center"
                        onClick={() => {dispatch(removeUSer());
                        sessionStorage.clear();
                        handleSend();
                        }}
              >Quit from account</button>
              </Link>
  
</div>

    </div>
      </div>
      
    </div>
    <div className="col-lg-8 col-12">
    <div className="row py-3 mb-5 cardss" >
              <div className="row">
                <Card result={result}/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}
