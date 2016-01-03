// Define available pages
var pages = [{
  name: 'About',
  template: 'about--template',
  title: 'Iiro Jäppinen',
  url: '/'
},{
  name: 'Résumé',
  template: 'resume--template',
  title: 'Résumé of Iiro Jäppinen',
  url: '/resume'
}]

// Create tabs
var tabContainer = document.getElementById('navigation').getElementsByTagName('ul')[0],
    tabs         = []
tabContainer.innerText = ''
for (var i in pages) {
  var li = document.createElement('li'),
      a  = document.createElement('a')
      t  = document.createTextNode(pages[i].name)
  li.appendChild(a).appendChild(t)
  a.setAttribute('href', pages[i].url)
  a.setAttribute('navigation','')
  tabContainer.appendChild(li)
  tabs.push(a)
}

// Set initial page and history.state
var page = pages.filter(function(x) {return x.url == window.location.pathname})[0]
history.replaceState(page, page.title, page.url)

// Listen to scroll and add shadows to navigation bar
if (window.scrollY > 0) {
  document.getElementById('navigation').setAttribute('opaque', '')
}
window.addEventListener('scroll', function() {
  var nav = document.getElementById('navigation')
  if (this.scrollY > 0) {
    nav.setAttribute('opaque', '')
  } else {
    nav.removeAttribute('opaque')
  }
}, false)

// Update active tab
function updateTabs() {
  for (var i in tabs) {
    if (tabs[i].getAttribute('href') == page.url) {
      tabs[i].setAttribute('active','')
    } else {
      tabs[i].removeAttribute('active','')
    }
  }
}

// Re-render page on navigation links
function navigation(x) {
  if (x !== page.url) {
    page = pages.filter(function(y) {return y.url == x})[0]
    history.pushState(page, page.title, page.url)
    render(page.url)
  }
}

// Render page
function render(x) {
  var template  = document.getElementById(page.template),
      clone     = document.importNode(template.content, true),
      container = document.getElementById('container')

  while (container.childElementCount !== 0) { container.children[0].remove() }
  container.appendChild(clone)
  document.title = page.title
  updateTabs()

  nav = Array.prototype.slice.call(document.querySelectorAll('a[navigation]'))
  for (var i in nav) {
    nav[i].addEventListener('click', function(event) {
      event.preventDefault()
      navigation(this.getAttribute('href'))
    })
  }
}

// Initial page load
document.addEventListener('DOMContentLoaded', function() {
  render(page.url)
})
// Window history page load
window.onpopstate = function(event) {
  if ( page !== history.state) {
    page = history.state
    render(page.url)
  }
}
