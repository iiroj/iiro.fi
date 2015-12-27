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
