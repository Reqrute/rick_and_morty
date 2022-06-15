import { useSelector } from "react-redux";

export function useInit () {
    const {info , result} = useSelector(state => state.init);

    return {
        info,
        result,
    };
}