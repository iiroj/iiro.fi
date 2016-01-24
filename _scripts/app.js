var pages     = [{
                  name: "About",
                  template: "about--template",
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

function navigation(x) {
  if (x !== page.url) {
    page = pages.filter(function(y) {return y.url == x})[0]
    history.pushState(page, page.title, page.url)
    render(page.url)
  }
}

function render(x) {
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

history.replaceState(page, page.title, page.url)

navUl.innerHTML = ""

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

if (window.scrollY > 0) {
  nav.setAttribute("opaque", "")
}

render(page.url)

window.addEventListener("scroll", function() {
  if (this.scrollY > 0) {
    nav.setAttribute("opaque", "")
  } else {
    nav.removeAttribute("opaque")
  }
}, false)

window.onpopstate = function(event) {
  if ( page !== history.state) {
    page = history.state
    render(page.url)
  }
}
