(()=>{"use strict";function e(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function t(){const t=document.getElementById("content");e(t);const n=document.createElement("img");n.src="../dist/ham.jpg",n.style.width="400px",t.appendChild(n);const c=document.createElement("p");c.textContent="Come to Freddy's Hamstaurant for the world's thickest ham-slice sandwiches!",t.appendChild(c)}const n=document.getElementById("content");n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center";const c=document.getElementById("header");c.style.display="flex",c.style.flexDirection="column",c.style.justifyContent="center",c.style.alignItems="center";const l=document.createElement("h1");l.textContent="Freddy's Hamstaurant",l.style.margin="5px",c.appendChild(l);const d=document.createElement("ul");d.style.display="flex",d.style.listStyleType="none",d.style.gap="15px",d.style.padding="0",d.style.marginTop="10px",c.appendChild(d);const o=document.createElement("li");o.textContent="Home";const s=document.createElement("li");s.textContent="Menu";const i=document.createElement("li");i.textContent="Contact",d.appendChild(o),d.appendChild(s),d.appendChild(i);for(let e=0;e<d.children.length;e++)d.children[e].style.cursor="pointer";o.addEventListener("click",t),s.addEventListener("click",(function(){const t=document.getElementById("content");e(t);const n=document.createElement("p");n.textContent="Hamwich ~ $10",t.appendChild(n);const c=document.createElement("p");c.textContent="Ham Salad ~ $8",t.appendChild(c);const l=document.createElement("p");l.textContent="Ham Steak ~ $15",t.appendChild(l)})),i.addEventListener("click",(function(){const t=document.getElementById("content");e(t);const n=document.createElement("p");n.textContent="1-800-HAM-TALK",t.appendChild(n);const c=document.createElement("p");c.textContent="johnnyham@email.com",t.appendChild(c)})),t()})();