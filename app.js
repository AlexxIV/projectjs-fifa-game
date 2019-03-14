import Home                 from './views/pages/Home.js';
import ShowMatches          from './views/pages/Matches.js';
import SingleMatch          from './views/pages/SingleMatch.js';
import History              from './views/pages/History.js';
import Search               from './views/pages/Search.js';
import SearchResults        from './views/pages/SearchResults.js';
import Error404             from "./views/pages/404.js";

import Header               from './views/components/Header.js';
import Footer               from './views/components/Footer.js';

import Utilities            from "./services/Utilities.js";

let history = JSON.parse(localStorage.FifaGame || null) || {state: []};

const routes = {
    '/'                     : Home,
    '/team/:id'             : ShowMatches,
    '/team/:id/match/:id'   : SingleMatch,
    '/history'              : History,
    '/search'               : Search,
    '/search-results/:id'   : SearchResults,
};

const storeData = (obj) => {
    history.state.push(obj);
    history.updatedAt = new Date().getTime();
    localStorage.FifaGame = JSON.stringify(history);
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header.render();
    await Header.after_render();
    footer.innerHTML = await Footer.render();
    await Footer.after_render();

    let request = Utilities.parseRequestURL();

    let parsedURL = (request.resource ? '/' + request.resource : '/') +
        (request.id ? '/:id' : '') +
        (request.verb ? '/' + request.verb : '') +
        (request.optionalId ? '/:id' : '');

    let historyObject = (request.resource ? '/' + request.resource : '/') +
        (request.id ? '/' + request.id : '') +
        (request.verb ? '/' + request.verb : '') +
        (request.optionalId ? '/' + request.optionalId : '');

    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    content.innerHTML = await page.render();
    await page.after_render();

    storeData(historyObject);
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

