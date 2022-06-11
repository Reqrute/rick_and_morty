import { Link } from 'react-router-dom';
import {SignUp} from '../../Components/Authorization/signUp';

export default function Registration () {

  return (

        <div>
            <h3>Registration</h3>
            <SignUp />
            <div>
                or <Link to= "/login">Login</Link>
            </div>

        </div>
  )
}