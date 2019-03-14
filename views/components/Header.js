let Header = {
    render: async () => {
        let view =  /*html*/`
             <nav class="navbar navbar-expand-md navbar-light" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="#/">
                            <img src="assets/logo.png" width="150" height="90">
                        </a>
                    </div>
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarBasicExample"
                    aria-controls="navbarBasicExample" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarBasicExample" class="navbar-collapse collapse" aria-expanded="false">
                        <div class="navbar-nav mr-auto">
                            <a class="navbar-item ${window.location.hash === '' || window.location.hash === '#/' ? 'active' : ''}" href="#/">
                                Home
                            </a>
                            <a class="navbar-item ${window.location.hash === '#/history' ? 'active' : ''}" href="#/history">
                                History
                            </a>
                            <a class="navbar-item ${window.location.hash === '#/search' ? 'active' : ''}" href="#/search">
                                Search
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        `
        return view
    },
    after_render: async () => { }

}

export default Header;
