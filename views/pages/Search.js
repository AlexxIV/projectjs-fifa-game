let Search = {
    render: async () => {

        let view =
            `<section class="section">
                <div class="container h-100">
                  <div class="d-flex justify-content-center h-100">
                    <div class="searchbar">
                      <input class="search_input" type="text" name="search" id="search-input" placeholder="Search...">
                      <a href="#/search-results" id="search" class="search_icon"><i class="fas fa-search"></i></a>
                    </div>
                  </div>
                  <div class="d-none text-center" id="helper-block"><p>Please enter atleast 3 characters to search</p></div>
                </div>
            </section>`;
        return view;
    },

    after_render: async () => {
        let search = document.getElementById('search');
        let input = document.getElementById('search-input');
        let helper = document.getElementById('helper-block');

        search.addEventListener('click', (e) => {
            e.preventDefault();
            if (input.value.length > 2) {
                if (!helper.classList.contains('d-none')) {
                    helper.classList.add('d-none');
                }
                window.location.hash = `#/search-results/${input.value.toLowerCase()}`;
                history.pushState(null, null, `#/search-results/${input.value.toLowerCase()}`);
            } else {
                helper.classList.remove('d-none');
            }
        })
    }
};


export default Search;