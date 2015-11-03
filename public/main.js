// Functions

function activeTab() {
  var x = document.getElementsByTagName('x-tabs')[0].childNodes;
  for (i=0; i < x.length; i++) {
    if (x[i].getAttribute('tab') == tab.url) {
      x[i].setAttribute('active',true)
    } else {x[i].setAttribute('active',false)}
  }
}

function render(x) {
  var host = document.getElementById('x-container');
  host.textContent = '';
  host.appendChild(document.createElement(x));
  activeTab()
}

function initialRender() {
  tab = tabs.filter(function(y) {return y.url == window.location.pathname})[0];
  history.replaceState(tab, tab.title, tab.url);
  document.title = tab.title;
  render(tab.component);
}

function navigationRender(x) {
  if (x !== tab.url) {
    tab = tabs.filter(function(y) {return y.url == x})[0];
    history.pushState(tab, tab.title, tab.url);
    document.title = tab.title;
    render(tab.component);
  }
}

// Listeners

window.addEventListener('HTMLImportsLoaded', function() {
  initialRender();
});

window.onpopstate = function() {
  initialRender();
}