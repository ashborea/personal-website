import "../index.css"

const Navbar = () => {
    return (
        <div id="navbar" className="flex bg-darkbluebg">
            <div className="page-logo">
                <p>Marjorie <span className="color">Siad</span></p>
            </div>
            <nav className="flex">
                <ul className="flex">
                    <li className="text-white">Home</li>
                    <li>Projets</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </div>
    )

}

export default Navbar;