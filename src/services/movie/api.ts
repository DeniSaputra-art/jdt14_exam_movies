import {API} from "..";

const getNowPlaying = async (page: string) => {
    try {
        const response = await API.get(`/movie/now_playing?language=en-US&page=${page}`);

        return response.data as ResponseMovie;
    } catch (error) {
        console.log(error)
    }
}

export {getNowPlaying};


const getDetailById = async (id: string) => {
    try {
        const response = await API.get(`/movie/${id}?language=en-US`)
        
        return response.data as ResponseDetail;
    } catch (error) {
        console.log(error)
    }
}

export {getDetailById};