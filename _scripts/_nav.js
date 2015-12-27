var xNavProto = Object.create(HTMLElement.prototype, {
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
document.registerElement('x-nav', { prototype: xNavProto })
