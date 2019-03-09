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
                            <a class="navbar-item ${window.location.hash === '#/about' ? 'active' : ''}" href="#/about">
                                Groups
                            </a>
                            <a class="navbar-item ${window.location.hash === '#/secret' ? 'active' : ''}" href="#/secret">
                                Teams
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







/*
* <!--Navbar-->
<nav class="navbar navbar-light light-blue lighten-4">

  <!-- Navbar brand -->
  <a class="navbar-brand" href="#">Navbar</a>

  <!-- Collapse button -->
  <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
        class="fas fa-bars fa-1x"></i></span></button>

  <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">

    <!-- Links -->
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <!-- Links -->

  </div>
  <!-- Collapsible content -->

</nav>
<!--/.Navbar-->
*
* */