import { useSelector } from "react-redux";

export function useAuth () {
    const {email,token,userId, favotite} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        userId,
        favotite,  
    };
}