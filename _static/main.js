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
    page      = pages.filter(function(x) {return x.url == window.location.pathname})[0],
    nav       = document.getElementById("navigation"),
    navUl     = nav.getElementsByTagName("ul")[0],
    navArray  = []

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
  navArray.map(function(x) {
    if (x.getAttribute("href") == page.url) {
      x.setAttribute("active", "")
    } else {
      x.removeAttribute("active")
    }
  })
}

// fill initial history state
history.replaceState(page, page.title, page.url)
document.title = page.title

// clear javascript message
navUl.innerHTML = ""

// create tab links for navigation
pages.map(function(x) {
  var navLi = document.createElement("li"),
      navA  = document.createElement("a"),
      navAT = document.createTextNode(x.name)
  navLi.appendChild(navA).appendChild(navAT)
  navA.setAttribute("href", x.url)
  navA.setAttribute("navigation","")
  navA.addEventListener("click", function(event) {
    event.preventDefault()
    navigation(this.getAttribute("href"))
  })
  navUl.appendChild(navLi)
  navArray.push(navA)
})

// set nav bar initially opaque if needed
if (window.scrollY > 0) {
  nav.setAttribute("opaque", "")
}

// initial render
render()

// listen to scroll and make nav bar opaque
window.addEventListener("scroll", function() {
  if (this.scrollY > 0) {
    nav.setAttribute("opaque", "")
  } else {
    nav.removeAttribute("opaque")
  }
}, false)

// re-render on history navigation
window.onpopstate = function(event) {
  if ( page !== history.state) {
    page = history.state
    render()
  }
}
