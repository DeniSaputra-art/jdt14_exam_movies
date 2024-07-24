import { useEffect, useState } from "react";

import Loading from "../../components/loading";
import MovieCard from "../../components/movie-card";
import Pagination from "../../components/pagination";
import { getNowPlaying } from "../../services";
import { useQuery } from "../../hooks/useQuery";

const Home = () => {
  const [listMovie, setListMovie] = useState<ResponseMovie>();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string; 

  useEffect(() => {
    fetchMovie();
  }, [page]);

  const fetchMovie = async () => {
    try {
      const response = await getNowPlaying(page as string);
      setListMovie(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="text-3xl text-center font-bold p-5">Now Playing</label>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {listMovie ? listMovie.results.map((item: Movie, index: number) => (
          <MovieCard
            key={index}
            id={item.id}
            poster_path={item.poster_path}
            title={item.title}
            release_date={item.release_date}
            size="w-36"
          />
        )) : <Loading/>}
      </div>
      {listMovie ? <Pagination currentpage={listMovie.page} total_page={listMovie.total_pages}/> : <></>}
    </div>
  );
};

export default Home;
