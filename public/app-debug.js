var tabs = [{
  name: 'About',
  title: 'Iiro Jäppinen',
  descr: 'UX/UI designer from Helsinki, Finland',
  url: '/'
},{
  name: 'Résumé',
  title: 'Résumé of Iiro Jäppinen',
  descr: '',
  url: '/resume'
}]

function updatePage(x) {
  if (arguments.length == 1) {
    tab = tabs.filter(function(y) {return y.url == x})[0]
  } else {
    tab = tabs.filter(function(y) {return y.url == window.location.pathname})[0]
  }
  history.replaceState(tab, tab.title, tab.url)
  document.title = tab.title
  document.getElementsByTagName('meta')[1].setAttribute('content', tab.descr)

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
  links = document.getElementsByTagName('a')
}

function request(x) {
  var req  = new XMLHttpRequest()
  req.addEventListener('load', render)
  req.open('GET', x + '-fragment')
  req.send()
  updatePage(x)
}

var links = document.getElementsByTagName('a')
for (var i in links) {
  links[i].onclick = function(e) {
    e.preventDefault()
    request(this.getAttribute('href'))
  }
}

var nav = document.getElementById('navigation')
if (window.scrollY > 0) {
  nav.setAttribute('opaque', '')
}
window.addEventListener('scroll', function() {
  if (this.scrollY > 0) {
    nav.setAttribute('opaque', '')
  } else {
    nav.removeAttribute('opaque')
  }
}, false)
