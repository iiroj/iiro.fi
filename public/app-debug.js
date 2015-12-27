var xAboutProto = Object.create(HTMLElement.prototype)
xAboutProto.createdCallback = function() {
  var template = document.querySelector('#about-template'),
      clone    = document.importNode(template.content, true)
  this.appendChild(clone)
  this.setAttribute('role', 'article')
}
xAboutProto.attachedCallback = function() {
  var linkResume = this.getElementsByClassName('link-resume')[0]
  linkResume.addEventListener('click', function(e) {
      navigationRender('/resume')
  })
}
xAboutProto.detachedCallback = function () {
  var linkResume = this.getElementsByClassName('link-resume')[0]
  linkResume.removeEventListener('click')
}
document.registerElement('x-about', {prototype: xAboutProto})

var xNavProto = Object.create(HTMLElement.prototype)
xNavProto.createdCallback = function() {
  this.setAttribute('role', 'banner')
}
xNavProto.attachedCallback = function() {
  if (window.scrollY > 0) {
    this.setAttribute('opaque', '')
  }
  var xNav = this
  window.addEventListener('scroll', function() {
    if (this.scrollY > 0) {
      xNav.setAttribute('opaque', '')
    } else {
      xNav.removeAttribute('opaque')
    }
  }, false)
};
xNavProto.attributeChangedCallback = function() {
  if (this.hasAttribute('opaque')) {
    this.setAttribute('opaque','')
  }
}
document.registerElement('x-nav', { prototype: xNavProto })

var xResumeProto = Object.create(HTMLElement.prototype)
xResumeProto.createdCallback = function() {
  var template = document.querySelector('#resume-template')
  var clone    = document.importNode(template.content, true)
  this.appendChild(clone)
  this.setAttribute('role', 'article')
  this.setAttribute('vocab', '//schema.org')
}
document.registerElement('x-resume', {prototype: xResumeProto})

var xTabsProto = Object.create(HTMLOListElement.prototype)
xTabsProto.createdCallback = function() {
  this.setAttribute('role', 'navigation')
  var xTabs = this
  tabs.forEach(function(y) {
    var x = document.createElement('a')
    x.innerHTML = y.name
    x.setAttribute('url', y.url)
    xTabs.appendChild(x)
  })
}
xTabsProto.attachedCallback = function() {
  this.addEventListener('click', function(e) {
    if (e.target.tagName == 'A') {
      navigationRender(e.target.getAttribute('url'))
    }
  })
  if (this.hasAttribute('active')) {
    var x = this.children
    for (i=0; i < x.length; i++) {
      if (x[i].getAttribute('url') == this.getAttribute('active')) {
        x[i].setAttribute('active','')
      }
    }
  }
}
xTabsProto.attributeChangedCallback = function(y) {
  if (y == 'active') {
    var x = this.children
    for (i=0; i < x.length; i++) {
      if (x[i].getAttribute('url') == this.getAttribute('active')) {
        x[i].setAttribute('active','')
      } else { x[i].removeAttribute('active') }
    }
  }
}
document.registerElement('x-tabs', { prototype: xTabsProto })

tabs = [{
  name:'About',
  title:'Iiro Jäppinen',
  url:'/',
  component:'x-about'
},{
  name:'Résumé',
  title:'Résumé of Iiro Jäppinen',
  url:'/resume',
  component:'x-resume'
}]

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
