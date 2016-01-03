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
