"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaBookReader } from "react-icons/fa";


const Navbar = () => {

    const menuItems = (
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-Room">All Rooms</Link></li>
            <li><Link href="/add-Room">Add Room</Link></li>
            <li><Link href="/my-Booking">My Bookings</Link></li>
            
        </>
    )
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    console.log(user,isPending, "user");
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> <FaBookReader /> Study Nook</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {menuItems}
                </ul>
            </div>
            {isPending?(
                    <span className="loading loading-dots loading-xl"></span>
                ) : user ? (
                    <div className="navbar-end text-blue-950">
                            <span className="mr-4">{user.image ? <img 
                            src={user.image}
                             alt={user.name}
                              className="w-8 h-8 object-cover rounded-full mr-2 border" /> : null}{user.name}!</span>
                        <button className="btn btn-primary" onClick={async()=> await authClient.signOut() }>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="navbar-end text-blue-950 gap-2">
                        <button className="btn btn-primary">
                            <Link className="text-white" href="/Login">
                                Login
                            </Link>
                        </button>
                        <button className="btn btn-primary">
                            <Link className="text-white" href="/Sign-up">
                                Sign Up
                            </Link>
                        </button>
                    </div>
                )}
        </div>
    );
};

export default Navbar;