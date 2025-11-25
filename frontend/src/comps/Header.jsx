import Link from "next/link";
import Logo from "./UI/Logo";

export default function Header() {
    const navLinks = <>
        <li> <Link href='/'>Home</Link> </li>
        <li> <Link href='/recentposts'>Recent Posts</Link> </li>
        <li>
            <details>
                <summary>Categories</summary>
                <ul className="p-2">
                    <li><a>Technical</a></li>
                    <li><a>Academic</a></li>
                </ul>
            </details>
        </li>
        <li> <Link href='/about'>About</Link> </li>
        <li> <Link href='/contact'>Contact</Link> </li>
    </>;
    return (
        <header className="bg-base-100 shadow-sm">
            <nav className="navbar containerr">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <Logo />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href='/login' className="btn">Login</Link>
                </div>
            </nav>
        </header>
    );
}