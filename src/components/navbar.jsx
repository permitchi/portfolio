import './components.css'
import './hero.jsx'
import './work.jsx'
import './contact.jsx'

function NavBar() {
    return (
    <nav className="absolute top-0 left-8 right-8 z-50 mx-8 flex justify-between items-center">
        <ul className="flex gap-4 text-lg text-black p-8">
            <li className="nav-button hover:bg-[var(--seagrass)] px-3 py-4 rounded transition-all"><a href="#Hero">Home</a></li>
            <li className="nav-button hover:bg-[var(--seagrass)] px-3 py-4 rounded transition-all"><a href="#About">About</a></li>
            <li className="nav-button hover:bg-[var(--seagrass)] px-3 py-4 rounded transition-all"><a href="#Work">Work</a></li>
            <li className="nav-button hover:bg-[var(--seagrass)] px-3 py-4 rounded transition-all"><a href="#Contact">Contact</a></li>
        </ul>

        <ul className="flex gap-8 text-lg text-white">
        {/* Add your right-side links here */}
        </ul>
    </nav>
    );
}

export default NavBar;