function updateTabs(){for(var e in tabs)tabs[e].getAttribute("href")==page.url?tabs[e].setAttribute("active",""):tabs[e].removeAttribute("active","")}function navigation(e){page=pages.filter(function(t){return t.url==e})[0],render(e),history.pushState(page,page.title,page.url)}function render(e){for(var t=document.getElementById(page.template),n=document.importNode(t.content,!0),a=document.getElementById("container");0!==a.childElementCount;)a.children[0].remove();a.appendChild(n),document.title=page.title,updateTabs(),nav=Array.prototype.slice.call(document.querySelectorAll("a[navigation]"));for(var r in nav)nav[r].addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("href");t!==page.url&&navigation(t)})}var pages=[{title:"Iiro Jäppinen",url:"/",template:"about--template"},{title:"Résumé of Iiro Jäppinen",url:"/resume",template:"resume--template"}],page=pages.filter(function(e){return e.url==window.location.pathname})[0],tabs=Array.prototype.slice.call(document.getElementById("navigation").getElementsByTagName("a"));history.replaceState(page,page.title,page.url),window.scrollY>0&&document.getElementById("navigation").setAttribute("opaque",""),window.addEventListener("scroll",function(){var e=document.getElementById("navigation");this.scrollY>0?e.setAttribute("opaque",""):e.removeAttribute("opaque")},!1),document.addEventListener("DOMContentLoaded",function(){render(page.url)});