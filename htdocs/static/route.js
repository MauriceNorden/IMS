let app_div = document.getElementById('app');
const urlPageTitle = "mnDevs IMS";
let apiBaseurl = 'http://localhost:3000/v1';

const urlRoutes = {
	"dashboard": {
		template: "/templates/dashboard.html",
        script: "/script/dashboard.js",
		style: "/css/dashboard.css",
		title: "Home | " + urlPageTitle,
		description: "This is the home page",
	},
	"login": {
		template: "/templates/login.html",
        script: "/script/login.js",
		style: "/css/login.css",
		title: "login | " + urlPageTitle,
		description: "Login to IMS",
	},
};

const router = async () => {
	const location = sessionStorage.getItem('page')
	const route = urlRoutes[location];
    const html = await fetch(route.template).then((response) => response.text());

    const script = document.createElement("script");
	script.src = route.script;

	const css = document.createElement("link");
	css.rel = "stylesheet";
	css.href = route.style;

    
	app_div.innerHTML = html;
    document.head.appendChild(script);
	document.head.appendChild(css);
	document.title = route.title;
	document
		.querySelector('meta[name="description"]')
		.setAttribute("content", route.description);
};


function changePage(page) {
    sessionStorage.setItem('page', page);
    location.reload(); 
}

window.onload = router();




