import HomePage from "./pages/home";
import AboutPage from "./pages/a-propos";

import anime from "animejs"


const routes = {
  '/': HomePage,
  '/a-propos':AboutPage
}

function navigateTo(url) {
  history.pushState(null, null, url)
  renderPage()
}

function renderPage() {
  const path = window.location.pathname
  const page = routes[path] || (() => '<h1>Page non trouvée</h1>')
  document.querySelector('#app').innerHTML = page()
}

window.addEventListener('popstate', renderPage)

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle')
  const linksContainer = document.getElementById('links-container')

  menuToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('active')
  })
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault()
      navigateTo(e.target.href)
    }
  })
  anime({
    targets: '#links-container',
    translateX: 0,
    opacity: [0, 1],
    duration: 6300,
    easing:'easeInOutQuad',
  })
  renderPage()
})