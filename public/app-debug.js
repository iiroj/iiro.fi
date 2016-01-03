var tabs = [{
  title: 'Iiro Jäppinen',
  descr: 'UX/UI designer from Helsinki, Finland',
  url: '/'
},{
  title: 'Résumé of Iiro Jäppinen',
  descr: '',
  url: '/resume'
}]
var tab      = tabs.filter(function(y) {return y.url == window.location.pathname})[0],
    navLinks = [].slice.call(document.getElementById('navigation').getElementsByTagName('a'))

function updatePage(x) {
  if (arguments.length == 1) {
    tab = tabs.filter(function(y) {return y.url == x})[0]
  }
  history.replaceState(tab, tab.title, tab.url)
  document.title = tab.title
  document.getElementsByTagName('meta')[1].setAttribute('content', tab.descr)

  for (var i in navLinks) {
    if (navLinks[i].getAttribute('href') == window.location.pathname) {
      navLinks[i].setAttribute('active','')
    } else {
      navLinks[i].removeAttribute('active','')
    }
  }
}
updatePage()

function render() {
  var res    = this.responseText
  document.getElementById('container').innerHTML = res
  links = document.getElementsByTagName('a')
}

function request(x) {
  var req  = new XMLHttpRequest()
  req.addEventListener('load', render)
  req.open('GET', x + '-fragment')
  req.send()
  updatePage(x)
}

for (var i in navLinks) {
  navLinks[i].onclick = function(e) {
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
