import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const [isUser, setIsUser] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("jwt")
        setIsUser(true)
        navigate("/")
    }
    console.log(isUser);
    console.log(localStorage.jwt)

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                     </label>
                       {localStorage.jwt ?<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/records">Records</Link></li>
                        </ul> : <></>}
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Crowd Fund</a>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className="mx-2"><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/records">Records</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-xl">
                                <img src="/dev-data/user.png" />
                            </div>
                        </label>
                        {<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
