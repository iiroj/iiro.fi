function render(x) {
  var container = document.getElementById('x-container')
  while (container.firstChild) container.removeChild(container.firstChild)
  container.appendChild(document.createElement(x))
  document.getElementsByTagName('x-tabs')[0].setAttribute('active', tab.url)
}

function initialRender() {
  tab = tabs.filter(function(y) {return y.url == window.location.pathname})[0]
  history.replaceState(tab, tab.title, tab.url)
  document.title = tab.title
  render(tab.component)
}

function navigationRender(x) {
  if (x !== tab.url) {
    tab = tabs.filter(function(y) {return y.url == x})[0]
    history.pushState(tab, tab.title, tab.url)
    document.title = tab.title
    render(tab.component)
  }
}

window.addEventListener('WebComponentsReady', function() {
  initialRender()
})

window.onpopstate = function() {
  initialRender()
}
