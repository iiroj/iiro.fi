var pages     = [{
      name: "Home",
      template: "home--template",
      title: "Iiro Jäppinen",
      url: "/"
    },{
      name: "Résumé",
      template: "resume--template",
      title: "Résumé of Iiro Jäppinen",
      url: "/resume"
    }],
    page = pages.filter(function(x) {return x.url == window.location.pathname})[0]

// if navigation target is not the current page, render
function navigation(x) {
  if (x !== page.url) {
    page = pages.filter(function(y) {return y.url == x})[0]
    history.pushState(page, page.title, page.url)
    document.title = page.title
    render()
  }
}

// render current page and activate tab
function render() {
  var container = document.getElementById("container"),
      template  = document.getElementById(page.template),
      clone     = document.importNode(template.content, true)
  while (container.childElementCount !== 0) {
    container.children[0].remove()
  }
  container.appendChild(clone)
  navBar()
}

function navBar() {
  if (page.url == "/") {
    return
  }

  var nav = document.getElementById("navigation")

  if (window.scrollY > 0) {
    nav.setAttribute("opaque", "")
  }
  window.addEventListener("scroll", function() {
    if (this.scrollY > 0) {
      nav.setAttribute("opaque", "")
    } else {
      nav.removeAttribute("opaque")
    }
  }, false)
}

function navLinks() {

}

// fill initial history state
history.replaceState(page, page.title, page.url)
document.title = page.title

// initial render
render()

// re-render on history navigation
window.onpopstate = function(event) {
  if ( page !== history.state) {
    page = history.state
    render()
  }
}
