import { useSelector } from "react-redux";

export function useLocation() {
    const {dimension, type, name , result,} = useSelector(state => state.location);

    return {
        dimension,
        type,
        name,
        result,
    };
}