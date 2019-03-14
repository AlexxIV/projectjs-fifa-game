let History = {
    render: async () => {
        let history = JSON.parse(localStorage.FifaGame || null);
        let view =
            `<section class="section" id="history">
                <button class="btn btn-primary mb-5" id="history-clear">Clear History</button>
                <div class="row">
                    <div class="col-8">
                        <ul>
                            ${history.state.map(event => `<li><a href="#${event}">${event}</a></li>`).join('')}    
                        </ul>
                    </div>
                </div>
            </section>`;
        return view;
    },

    after_render: async () => {
        const clearHistory = () => {
            localStorage.clear();
            let elm = document.getElementById('history');
            elm.parentNode.removeChild(elm);
            history = {state: []};
        };
        let clearButton = document.getElementById('history-clear');
        clearButton.addEventListener('click', clearHistory);
    }
};


export default History;