function Nav () {
    
    /*
    import { app } from "electron";

    const MINUS = document.getElementById("minimize");
    const CLOSE_APP = document.getElementById("close-app");

    MINUS.onClick={minimize};
    CLOSE_APP.onClick={close_app};

    function close_app() {
        app.window.close();
    }

    function minimize() {
        app.window.minimize();
    }
    */
    
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