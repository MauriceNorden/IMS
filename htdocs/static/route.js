let app_div = document.getElementById('app');
const urlPageTitle = "mnDevs IMS";
const auth = sessionStorage.getItem('auth');
const userid = sessionStorage.getItem('userid');
const username = sessionStorage.getItem('username');
let apiBaseurl = 'http://localhost:3000/v1';
const urlRoutes = {
	"dashboard": {
		template: "templates/dashboard.html",
        script: "script/dashboard.js",
		header: "templates/header.html",
		style: "css/dashboard.css",
		title: "Dashboard | " + urlPageTitle,
	},
	"login": {
		template: "templates/login.html",
        script: "script/login.js",
		header: "templates/header.html",
		style: "css/login.css",
		title: "Login | " + urlPageTitle,
	},
};

const router = async () => {
	let pagelocation = await sessionStorage.getItem('page');
   const route = urlRoutes[pagelocation];
   const header = await fetch(route.header).then((response) => response.text());
   const html = await fetch(route.template).then((response) => response.text());
   const script = document.createElement("script");
   script.src = route.script;
   const css = document.createElement("link");
   css.rel = "stylesheet";
   css.href = route.style;
   document.body.innerHTML = header + html;
   document.head.appendChild(script);
   document.head.appendChild(css);
   document.title = route.title;
};

const changePage = (page) => {
	sessionStorage.setItem('page', page);
	location.reload();
}

const onLoadingWindow = async () => {
	const pagelocation = await sessionStorage.getItem('page');
	if (pagelocation === null) {
		sessionStorage.setItem('page', 'login');
		location.reload();
	}else{
		router();
	}
}

window.onload = onLoadingWindow();