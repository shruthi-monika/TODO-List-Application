
const input = document.querySelector('#add');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');
const el = document.getElementsByTagName('li');


//function for add list after button
btn.onclick = function(){
    var txt = input.value;
    if(txt == ""){
        alert("must enter your task");
    }else{
        li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
};
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
        ev.target.classList.toggle('checked');
    }
};