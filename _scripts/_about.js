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
