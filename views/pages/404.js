let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> 404 Error </h1>
                <h3> The page cannot be found</h3>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;