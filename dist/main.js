(()=>{"use strict";const t=function(t){this.name=t,this.toDos=[],this.remove=function(t){for(let e=0;e<this.toDos.length;e++)this.toDos[e].id==t&&(this.toDos.splice(e,1),console.log(this.toDos))}},e=function(t,e){this.title=t,this.description=e,this.complete=!1,this.id=(new Date).getTime().toString(32)+Math.floor(1e3*Math.random()).toString()};function o(t,e){const o=t,n=document.createElement(e);return o.appendChild(n),n}const n={createToDo:function(t){const e=o(document.getElementById("toDos"),"div");e.classList.add("todo"),e.id=t.id;const n=o(e,"button");n.classList.add("edit-button"),n.textContent="Edit";const i=o(e,"button");i.classList.add("removeButton"),i.textContent="X";const s=o(e,"h3"),c=o(e,"p");s.textContent=t.title,c.textContent=t.description}};let i;!function(){const o=new t("Default");i=o,document.getElementById("create-todo").addEventListener("click",(function(){const t=new e(document.getElementById("title").value,document.getElementById("description").value);n.createToDo(t),o.toDos.push(t),console.log(o)})),document.addEventListener("click",(function(t){t.target.classList.contains("removeButton")&&(t.target.parentNode.remove(),i.remove(t.target.parentNode.id))}))}()})();