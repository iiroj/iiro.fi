var pages     = [{
                  name: 'About',
                  template: 'about--template',
                  title: 'Iiro Jäppinen',
                  url: '/'
                },{
                  name: 'Résumé',
                  template: 'resume--template',
                  title: 'Résumé of Iiro Jäppinen',
                  url: '/resume'
                }],
    page      = pages.filter(function(x) {return x.url == window.location.pathname})[0],
    container = document.getElementById('container'),
    nav       = document.getElementById('navigation'),
    navUl     = nav.getElementsByTagName('ul')[0],
    navArray  = []

function createNav(i) {
  var navLi = document.createElement('li'),
      navA  = document.createElement('a')
      navAT = document.createTextNode(pages[i].name)
  navLi.appendChild(navA).appendChild(navAT)
  navA.setAttribute('href', pages[i].url)
  navA.setAttribute('navigation','')
  navA.addEventListener('click', function(event) {
    event.preventDefault()
    navigation(this.getAttribute('href'))
  })
  navUl.appendChild(navLi)
  navArray.push(navA)
}

function activeNavA() {
  for (var i in navArray) {
    if (navArray[i].getAttribute('href') == page.url) {
      navArray[i].setAttribute('active','')
    } else {
      navArray[i].removeAttribute('active','')
    }
  }
}

function navigation(x) {
  if (x !== page.url) {
    page = pages.filter(function(y) {return y.url == x})[0]
    history.pushState(page, page.title, page.url)
    render(page.url)
  }
}

function render(x) {
  var template = document.getElementById(page.template),
      clone    = document.importNode(template.content, true),
      child
  while (container.childElementCount !== 0) {
    child = container.children[0]
    child.remove()
  }
  container.appendChild(clone)
  activeNavA()
}

navUl.innerHTML = ''
history.replaceState(page, page.title, page.url)

for (var i in pages) {
  createNav(i)
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.scrollY > 0) {
    nav.setAttribute('opaque', '')
  }
  render(page.url)
})

window.addEventListener('scroll', function() {
  if (this.scrollY > 0) {
    nav.setAttribute('opaque', '')
  } else {
    nav.removeAttribute('opaque')
  }
}, false)

window.onpopstate = function(event) {
  if ( page !== history.state) {
    page = history.state
    render(page.url)
  }
}
