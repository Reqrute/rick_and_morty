import { Link } from 'react-router-dom';
import {Login} from '../../Components/Authorization/Login';


export default function Autorization () {
  return (
        <div>
            <h3>Login</h3>
            <Login/>
            <div>
                or <Link to= "/register">register</Link>
            </div>

        </div>
  )
}


