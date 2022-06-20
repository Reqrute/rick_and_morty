import { useSelector } from "react-redux";

export function useAuth () {
    const {email,token,userId,name, password, favorite} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        userId,
        name,
        password,
        favorite,  
    };
}