import { useSelector } from "react-redux";

export function useSide () {
    const {search, species, gender, status, pageNumber,} = useSelector(state => state.side);

    return {
        isFiltered : !!species || !!gender || !!status, 
        search,
        species,
        gender,
        status,
        pageNumber,
    };
}