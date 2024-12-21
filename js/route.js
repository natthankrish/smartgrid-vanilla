import { setupHomePage } from "/js/home.js";
import { validateUser } from "/js/journal.js";
import { loggingIn } from "/js/login.js";

const routes = {
    "/smartgrid": "/page/home.html",
    "/": "/page/home.html",
    "/automated-monitoring-control": "/page/amc.html",
    "/automated-monitoring-control/": "/page/amc.html",
    "/data-analytics": "/page/da.html",
    "/data-analytics/": "/page/da.html",
    "/supply-reliability": "/page/sr.html",
    "/supply-reliability/": "/page/sr.html",
    "/distributed-energy-resources-integration": "/page/deri.html",
    "/distributed-energy-resources-integration/": "/page/deri.html",
    "/green-energy": "/page/ge.html",
    "/green-energy/": "/page/ge.html",
    "/cyber-security-measures": "/page/csm.html",
    "/cyber-security-measures/": "/page/csm.html",
    "/customer-empowerment-and-satisfaction": "/page/ces.html",
    "/customer-empowerment-and-satisfaction/": "/page/ces.html",
    "/login": "/page/login.html",
    "/login/": "/page/login.html",
    "/journal": "/page/journal.html",
    "/journal/": "/page/journal.html",
    404: "/page/404.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    console.log(path, route);

    if (path === "/journal" || path === "/journal/" || path.startsWith("/doc")) {
        const status = await validateUser();
        if (!status) {
            window.history.pushState({}, "", "/login");
            return await handleLocation();
        }
    }

    document.getElementById("content").innerHTML = html;

    if (path === "/") {
        setupHomePage();
    } else if (path === "/login" || path === "/login/") {
        document.getElementById("submit-login").addEventListener('click', (event) => {
            event.preventDefault();
            loggingIn(
                document.getElementById("username").value,
                document.getElementById("password").value
            );
        });
    }
};

window.addEventListener("popstate", handleLocation);
window.addEventListener("load", handleLocation);