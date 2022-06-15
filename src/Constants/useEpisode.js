import { useSelector } from "react-redux";

export function useEpisode() {
    const {air_date, name , result} = useSelector(state => state.episode);

    return {
        air_date,
        name,
        result,
    };
}