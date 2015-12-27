var tabs = [{
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

document.registerElement('x-about', {prototype:
  Object.create(HTMLElement.prototype, {
    createdCallback: {
      value: function() {
        var template = document.querySelector('#about-template'),
            clone    = document.importNode(template.content, true)
        this.appendChild(clone)
        this.setAttribute('role', 'article')
      }
    },
    attachedCallback: {
      value: function() {
        var linkResume = this.getElementsByClassName('link-resume')[0]
        linkResume.addEventListener('click', function(e) {
            navigationRender('/resume')
        })
      }
    },
    detachedCallback: {
      value: function () {
        var linkResume = this.getElementsByClassName('link-resume')[0]
        linkResume.removeEventListener('click')
      }
    }
  })
})

document.registerElement('x-nav', { prototype:
  Object.create(HTMLElement.prototype, {
    createdCallback: {
      value: function() {
        this.setAttribute('role', 'banner')
      }
    },
    attachedCallback: {
      value: function() {
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
      }
    },
    attributeChangedCallback: {
      value: function() {
        if (this.hasAttribute('opaque')) {
          this.setAttribute('opaque','')
        }
      }
    }
  })
})

document.registerElement('x-resume', {prototype:
  Object.create(HTMLElement.prototype, {
    createdCallback: {
      value: function() {
        var template = document.querySelector('#resume-template')
        var clone    = document.importNode(template.content, true)
        this.appendChild(clone)
        this.setAttribute('role', 'article')
        this.setAttribute('vocab', '//schema.org')
      }
    }
  })
})

document.registerElement('x-tabs', { prototype:
  Object.create(HTMLOListElement.prototype, {
    createdCallback: {
      value: function() {
        this.setAttribute('role', 'navigation')
        var xTabs = this
        tabs.forEach(function(y) {
          var x = document.createElement('a')
          x.innerHTML = y.name
          x.setAttribute('url', y.url)
          xTabs.appendChild(x)
        })
      }
    },
    attachedCallback: {
      value: function() {
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
    },
    attributeChangedCallback: {
      value: function(y) {
        if (y == 'active') {
          var x = this.children
          for (i=0; i < x.length; i++) {
            if (x[i].getAttribute('url') == this.getAttribute('active')) {
              x[i].setAttribute('active','')
            } else { x[i].removeAttribute('active') }
          }
        }
      }
    }
  })
})

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
