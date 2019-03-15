import Fetcher from '../../services/Fetcher.js';

const url = `http://worldcup.sfg.io/teams`;


function getObject(theObject) {
    // Hacks all day
    let hash = window.location.hash;
    let needle = hash.split('/')[2];

    var result = null;
    if(theObject instanceof Array) {
        for(var i = 0; i < theObject.length; i++) {
            result = getObject(theObject[i]);
            if (result) {
                break;
            }
        }
    }
    else
    {
        for(var prop in theObject) {
            if(prop.toLowerCase().includes(needle) || (typeof theObject[prop] === 'string' && theObject[prop].toLowerCase().includes(needle))) {
                return theObject;
            }
            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                result = getObject(theObject[prop]);
                if (result) {
                    break;
                }
            }
        }
    }
    return result;
}

let SearchResults = {
    render: async () => {
        let searchResults;
        let data = await Fetcher(url).then(data => {
            searchResults = getObject(data);
        });

        let view =
            `<section class="section">
                ${searchResults !== null ? `<div class="row"><div class="col-2"><p class="font-weight-bold">Country</p></div><div class="col-2"><p class="font-weight-bold">Group</p></div></div><div class="row"><div class="col-2"><a href="#/team/${searchResults.fifa_code}"><p><img width="50" height="40" src="assets/${searchResults.fifa_code.toLowerCase()}.png"> ${searchResults.country}</p></a></div><div class="col-2"><p class="font-weight-bold">${searchResults.group_letter}</p></div> </div>` : `<h2>No results found!</h2>`}
            </section>`;
        return view;
    },

    after_render: async () => {
    }
};


export default SearchResults;