const ch = document.getElementsByClassName('headname')[0];
ch.innerHTML = "modify";

const p1 = document.createElement('p')
p1.textContent = "create text1";
const parent = document.getElementById('content');
//parent.insertBefore(p1, parent.childNodes[6]);
parent.appendChild(p1);