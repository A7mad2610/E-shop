let text = document.getElementById('read-more-txt');
let more = document.getElementById('read-more-btn');
let read = document.getElementById('read-more');


more.onclick = function(){
    text.classList.toggle("show");
}

