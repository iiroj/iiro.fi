var xResumeProto = Object.create(HTMLElement.prototype)
xResumeProto.createdCallback = function() {
  var template = document.querySelector('#resume-template')
  var clone    = document.importNode(template.content, true)
  this.appendChild(clone)
  this.setAttribute('role', 'article')
  this.setAttribute('vocab', '//schema.org')
}
document.registerElement('x-resume', {prototype: xResumeProto})
