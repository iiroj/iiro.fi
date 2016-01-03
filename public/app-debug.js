var tabs = [{
  title: 'Iiro Jäppinen',
  descr: 'UX/UI designer from Helsinki, Finland',
  url: '/'
},{
  title: 'Résumé of Iiro Jäppinen',
  descr: '',
  url: '/resume'
}]
var tab = tabs.filter(function(y) {return y.url == window.location.pathname})[0],
    nav = [].slice.call(document.getElementById('navigation').getElementsByTagName('a'))

function updatePage(x) {
  if (arguments.length == 1) {
    tab = tabs.filter(function(y) {return y.url == x})[0]
  }
  history.replaceState(tab, tab.title, tab.url)
  document.title = tab.title
  document.getElementsByTagName('meta')[1].setAttribute('content', tab.descr)

  for (var i in nav) {
    if (nav[i].getAttribute('href') == window.location.pathname) {
      nav[i].setAttribute('active','')
    } else {
      nav[i].removeAttribute('active','')
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
