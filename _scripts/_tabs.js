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
