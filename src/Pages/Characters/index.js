
import React from 'react'
import { useDispatch } from 'react-redux'
import {Navigate} from 'react-router-dom'
import { useAuth } from '../../Constants/use-auth'
import {removeUSer} from '../../store/slices/userSlice'



const Characters = () => {
    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();

    return isAuth? (
        <div>
            <h1> Welcome</h1>

            <button
            onClick={() => dispatch(removeUSer())}
            >
            Log out from {email}</button>
        </div>
    ) : (
        <Navigate to = "/login" />
    )
}

export default Characters