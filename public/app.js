function render(t){for(var e=document.getElementById("x-container");e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createElement(t)),document.getElementsByTagName("x-tabs")[0].setAttribute("active",tab.url)}function initialRender(){tab=tabs.filter(function(t){return t.url==window.location.pathname})[0],history.replaceState(tab,tab.title,tab.url),document.title=tab.title,render(tab.component)}function navigationRender(t){t!==tab.url&&(tab=tabs.filter(function(e){return e.url==t})[0],history.pushState(tab,tab.title,tab.url),document.title=tab.title,render(tab.component))}var xAboutProto=Object.create(HTMLElement.prototype,{createdCallback:{value:function(){var t=document.querySelector("#about-template"),e=document.importNode(t.content,!0);this.appendChild(e),this.setAttribute("role","article")}},attachedCallback:{value:function(){var t=this.getElementsByClassName("link-resume")[0];t.addEventListener("click",function(t){navigationRender("/resume")})}},detachedCallback:{value:function(){var t=this.getElementsByClassName("link-resume")[0];t.removeEventListener("click")}}});document.registerElement("x-about",{prototype:xAboutProto});var xNavProto=Object.create(HTMLElement.prototype,{createdCallback:{value:function(){this.setAttribute("role","banner")}},attachedCallback:{value:function(){window.scrollY>0&&this.setAttribute("opaque","");var t=this;window.addEventListener("scroll",function(){this.scrollY>0?t.setAttribute("opaque",""):t.removeAttribute("opaque")},!1)}},attributeChangedCallback:{value:function(){this.hasAttribute("opaque")&&this.setAttribute("opaque","")}}});document.registerElement("x-nav",{prototype:xNavProto});var xResumeProto=Object.create(HTMLElement.prototype,{createdCallback:{value:function(){var t=document.querySelector("#resume-template"),e=document.importNode(t.content,!0);this.appendChild(e),this.setAttribute("role","article"),this.setAttribute("vocab","//schema.org")}}});document.registerElement("x-resume",{prototype:xResumeProto});var xTabsProto=Object.create(HTMLOListElement.prototype,{createdCallback:{value:function(){this.setAttribute("role","navigation");var t=this;tabs.forEach(function(e){var a=document.createElement("a");a.innerHTML=e.name,a.setAttribute("url",e.url),t.appendChild(a)})}},attachedCallback:{value:function(){if(this.addEventListener("click",function(t){"A"==t.target.tagName&&navigationRender(t.target.getAttribute("url"))}),this.hasAttribute("active")){var t=this.children;for(i=0;i<t.length;i++)t[i].getAttribute("url")==this.getAttribute("active")&&t[i].setAttribute("active","")}}},attributeChangedCallback:{value:function(t){if("active"==t){var e=this.children;for(i=0;i<e.length;i++)e[i].getAttribute("url")==this.getAttribute("active")?e[i].setAttribute("active",""):e[i].removeAttribute("active")}}}});document.registerElement("x-tabs",{prototype:xTabsProto}),tabs=[{name:"About",title:"Iiro Jäppinen",url:"/",component:"x-about"},{name:"Résumé",title:"Résumé of Iiro Jäppinen",url:"/resume",component:"x-resume"}],window.addEventListener("WebComponentsReady",function(){initialRender()}),window.onpopstate=function(){initialRender()};