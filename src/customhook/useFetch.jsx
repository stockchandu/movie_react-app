import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
//common custom fetch function for all movie API
export const useFetch = (url, action) => {
    const dispatch = useDispatch();
    useEffect(() => {
        try {
            axios.get(url)
                .then(({ data: { results } }) => {
                    dispatch(action(results))
                })
        } catch (err) {

        }

    }, [url])
}
//common custom fetch function for all movie indivudual details
export const useMovieDetailsFetch = (url, action) => {
    const dispatch = useDispatch();
    useEffect(() => {
        try {
            axios.get(url)
                .then(({ data }) => {
                    dispatch(action(data))
                })
        } catch (err) {

        }

    }, [url])
}