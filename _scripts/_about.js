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
