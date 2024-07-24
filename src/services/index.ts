import API from "./axios-with-config";
import { getDetailById } from "./movie/api";
import { getNowPlaying } from "./movie/api";
import { postLogin } from "./auth/api";

export {API, getNowPlaying, getDetailById, postLogin}