import "../index.css"

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="page-logo">
                <p>Marjorie <span className="green">Siad</span></p>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Projets</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </div>
    )

}

export default Navbar;