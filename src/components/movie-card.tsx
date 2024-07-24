import { Link } from 'react-router-dom';

interface Props {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    size?: string;
}
 
const MovieCard = (props: Props) => {
    const {id, title, poster_path, release_date, size} = props
    
  return (
    <Link to={`/detail/${id}`} className={`flex flex-col ${size}`}>
        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`}/>
        <label className='font-semibold'>{title}</label>
        <p>{release_date}</p>
    </Link>
  )
}

export default MovieCard