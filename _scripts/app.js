var tabs = [{
  name:'About',
  title:'Iiro Jäppinen',
  url:'/',
},{
  name:'Résumé',
  title:'Résumé of Iiro Jäppinen',
  url:'/resume',
}]

function updatePage(x) {
  if (arguments.length == 1) {
    tab = tabs.filter(function(y) {return y.url == x})[0]
  } else {
    tab = tabs.filter(function(y) {return y.url == window.location.pathname})[0]
  }
  history.replaceState(tab, tab.title, tab.url)
  document.title = tab.title

  var tabLinks  = [].slice.call(document.getElementById('navigation').getElementsByTagName('a')),
      activeTab = tabLinks.filter(function(x) {return x.getAttribute('href') == window.location.pathname})[0]

  for (var i in tabLinks) {
    if (tabLinks[i].getAttribute('href') == window.location.pathname) {
      tabLinks[i].setAttribute('active','')
    } else {
      tabLinks[i].removeAttribute('active','')
    }
  }
}
updatePage()

function render() {
  var res    = this.responseText,
      frag   = document.getElementById('container')
  frag.innerHTML = res
}

function request(x) {
  var req  = new XMLHttpRequest()
  req.addEventListener('load', render)
  req.open('GET', x + '-fragment')
  req.send()
  updatePage(x)
}
