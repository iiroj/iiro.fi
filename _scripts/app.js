// Define available pages
var pages = [{
  title: 'Iiro Jäppinen',
  url: '/',
  template: 'about--template'
},{
  title: 'Résumé of Iiro Jäppinen',
  url: '/resume',
  template: 'resume--template'
}]

// Set initial page and history.state
var page = pages.filter(function(x) {return x.url == window.location.pathname})[0],
    tabs = Array.prototype.slice.call(document.getElementById('navigation').getElementsByTagName('a'))
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
  page = pages.filter(function(y) {return y.url == x})[0]
  render(x)
  history.pushState(page, page.title, page.url)
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
      var target = this.getAttribute('href')
      if (target !== page.url) {
        navigation(target)
      }
    })
  }
}

// Initial page load
document.addEventListener('DOMContentLoaded', function() {
  render(page.url)
})
