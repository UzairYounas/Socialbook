var seetingsmenu = document.querySelector(".seetings-menu");
var darkBtn = document.getElementById('dark-btn');

function SeetingsMenuToggle(){
    seetingsmenu.classList.add ("seetings-menu-height");
}
darkBtn.onclick = function (){
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');
}