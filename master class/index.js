

var cursor=document.getElementById("cursor");

window.addEventListener('mousemove', function(e){
    const {x,y}=e
    cursor.style.left=x+"px";
    cursor.style.top=y+"px";
})