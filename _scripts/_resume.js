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
