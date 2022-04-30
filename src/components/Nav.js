function Nav () {
    return (
        <>    
            <nav>
                <div className="left-nav">
                    <span className="nav-link">&#x2630;</span>
                </div>
                <div className="right-nav">
                    <span className="nav-link" id="minimize">&minus;</span>
                    <span className="nav-link" id="close-app">&#10006;</span>
                </div>
            </nav>
        </>
    )
}

export default Nav;