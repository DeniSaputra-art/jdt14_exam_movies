import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <div className='flex flex-row w-full justify-between px-8 py-3 shadow-md'>
        <h2 className='text-2xl font-semibold'>Movie Time</h2>
        <div className='flex flex-row gap-10'>
            <Link to={"/"}>Home</Link>
            <Link to={"/movie"}>Movie</Link>
            <Link to={"/tv-show"}>TV Show</Link>
            <div onClick={handleLogout} className='cursor-pointer'>Logout</div>
        </div>
    </div>
  )
}

export default Navbar