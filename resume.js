function toggleCard(id){
    const card = document.getElementById(id);
    card.classList.toggle("ion-hide");
}
function contrasttoggle(){
    const app = document.querySelector('body');
    const cards = document.querySelector('#ref');
    cards.style.setProperty('--background', 'black');
    app.style.setProperty('--background', 'black');
    console.log('test');
}
//responsive 

const x = window.matchMedia("(min-width: 620px)");
const av = document.getElementById("avcon");
if(x.matches){
    av.classList.toggle("center");
}

//theme toggle

// Use matchMedia to check the user preference
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// toggleDarkTheme(prefersDark.matches);

// // Listen for changes to the prefers-color-scheme media query
// prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

// // Add or remove the "dark" class based on if the media query matches
// function toggleDarkTheme(shouldAdd) {
//   document.body.classList.toggle('dark', shouldAdd);
// }

// Query for the toggle that is used to change between themes
const toggle = document.querySelector('#themeToggle');

// Listen for the toggle check/uncheck to toggle the dark class on the <body>
toggle.addEventListener('ionChange', (ev) => {
  document.body.classList.toggle('dark', ev.detail.checked);
});

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((e) => checkToggle(e.matches));

// Called when the app loads
function loadApp() {
  checkToggle(prefersDark.matches);
}

// Called by the media query to check/uncheck the toggle
function checkToggle(shouldCheck) {
  toggle.checked = shouldCheck;
}