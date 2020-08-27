let navUl = document.getElementsByClassName('navul')[0]
let Arr = navUl.getElementsByTagName('a')
for (let i = 0; i < Arr.length; i++) {
    Arr[i].onmouseover = function () {
        this.className = 'hot'
    }
    Arr[i].onmouseout = function () {
        this.className = ''
    }
}

let divli = document.getElementsByClassName('mainul')[0]
let navli = divli.getElementsByTagName('li')
let listDiv = document.querySelectorAll('main > div')

for (let i = 0; i < navli.length; i++) {
    navli[i].onclick = function () {
        tabClick(i);
    }
}
function tabClick(i) {
    for (let k = 0; k < listDiv.length; k++) {
        listDiv[k].className = ''
    }
    listDiv[i].className = 'active'
}
