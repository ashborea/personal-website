import "../index.css"

const Navbar = () => {
    return (
        <header className="h-16">
            <nav className="flex bg-darkbluebg text-white h-20 justify-between align-middle p-6" >
                <div className="logo text-xl font-bold">
                    <a href="/">M<span className="text-mainteal">S</span></a>
                </div>
                <div className="navigation flex gap-x-12 align-middle">
                    <a href="#">A PROPOS</a>
                    <a href="/projets">PROJETS</a>
                    <a href="#">CONTACT</a>
                    <a href="#">BLOG</a>
                </div>
                <div className="language flex gap-2">
                    <a href="#">FR</a>
                    <a href="#">EN</a>
                </div>
            </nav>
        </header>
    )

}

export default Navbar;