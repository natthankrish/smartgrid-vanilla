import { setupHomePage } from "/smartgrid/js/home.js";
import { validateUser } from "/smartgrid/js/journal.js";
import { loggingIn } from "/smartgrid/js/login.js";

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation()
}

const routes = {
    "/smartgrid/": "/smartgrid/page/home.html",
    "/smartgrid/automated-monitoring-control": "/smartgrid/page/amc.html",
    "/smartgrid/data-analytics": "/smartgrid/page/da.html",
    "/smartgrid/supply-reliability": "/smartgrid/page/sr.html",
    "/smartgrid/distributed-energy-resources-integration": "/smartgrid/page/deri.html",
    "/smartgrid/green-energy": "/smartgrid/page/ge.html",
    "/smartgrid/cyber-security-measures": "/smartgrid/page/csm.html",
    "/smartgrid/customer-empowerment-and-satisfaction": "/smartgrid/page/ces.html",
    "/smartgrid/login": "/smartgrid/page/login.html",
    "/smartgrid/journal": "/smartgrid/page/journal.html"
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    console.log(path)
    console.log(route)
    const html = await fetch(route).then((data) => data.text());

    if (path == "/smartgrid/journal" || path == "/smartgrid/journal/") {
        let status = validateUser();
        if (!status) {
            window.location.href = '/smartgrid/login'; 
        }
    }

    document.getElementById("content").innerHTML = html;

    if (path == "/smartgrid/") {
        setupHomePage()
    } else if (path == "/smartgrid/login" || path == "/smartgrid/login/") {
        document.getElementById("submit-login").addEventListener('click', (event) => {
            event.preventDefault();
            loggingIn(
                document.getElementById("username").value,
                document.getElementById("password").value
            );
        });
    }
}

window.onpopstate = handleLocation
window.route = route;
handleLocation()