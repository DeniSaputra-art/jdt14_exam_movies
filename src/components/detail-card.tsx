interface Props {
  title: string;
  genre: Genre[];
  overview: string;
  poster_path: string;
  release_date: string;
  popularity: number;
  size?: string;
}
const DetailCard = (props: Props) => {
  const {
    title,
    genre,
    overview,
    poster_path,
    release_date,
    popularity,
  } = props;
  return (
    <div className={`flex flex-row bg-gradient-to-r from-cyan-50 to-blue-300 gap-3 rounded-md w-full mx-2`}>
        <img
          className="rounded-md"
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          loading="lazy"
          width={250} 
        />
        <div className="flex flex-col gap-3">
          <label className="text-3xl font-semibold">{title}</label>
          <span className="inline-flex items-baseline">
            <p>{release_date}&nbsp;&nbsp;&#x2022;</p>
            {genre.map((genre) => (
              <p>{genre.name},&nbsp;</p>
            ))}
          </span>
          <label className="font-semibold">Overview</label>
          <p>{overview}</p>
          <span className="inline-flex items-baseline">
            <label className="font-semibold">Popularity: &nbsp;</label>
            <p>{popularity}</p>
          </span>
        </div>
    </div>
  );
};

export default DetailCard;
