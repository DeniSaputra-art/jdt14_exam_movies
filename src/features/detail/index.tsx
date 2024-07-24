import { useEffect, useState } from "react";

import DetailCard from "../../components/detail-card";
import Loading from "../../components/loading";
import { getDetailById } from "../../services";
import { useParams } from "react-router-dom";

const Detail = () => {
  const {id} = useParams();
  const [detailMovie, setDetailMovie] = useState<ResponseDetail>();

  useEffect(() => {
    fetchDetail();
  }, [id]);

  const fetchDetail = async () => {
    try {
      const response = await getDetailById(id as string);
      setDetailMovie(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  return(
    <div className="flex flex-row py-10 px-5">
        {detailMovie ? <DetailCard
        title={detailMovie.title}
        genre={detailMovie.genres}
        overview={detailMovie.overview}
        poster_path={detailMovie.poster_path}
        release_date={detailMovie.release_date}
        popularity={detailMovie.popularity}
        size="w-20"
        /> : <Loading/>}
    </div>
  );
};

export default Detail;
