let Footer = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div class="content has-text-centered container mt-5">
                <p>
                    <span class="font-italic font-weight-bold">Simple footer</span> <span><a class="float-right" href="https://github.com/AlexxIV/projectjs-fifa-game"><img src="assets/github.png" alt="" class="img-fluid"></a></span>
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Footer;