import Home         from './views/pages/Home.js';
import Error404     from "./views/pages/404.js";

import Header       from './views/components/Header.js';
import Footer       from './views/components/Footer.js';

import Utilities    from "./services/Utilities.js";

const routes = {
     '/'            : Home
    // ,'/about'       : About
    // ,'/p/:id'       : PostShow
    // ,'/register'    : Register
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
        (request.verb ? '/' + request.verb : '');

    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    content.innerHTML = await page.render();
    await page.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

console.log(window.location.hash);