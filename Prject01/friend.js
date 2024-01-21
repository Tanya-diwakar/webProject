
var strang=document.querySelector("h5")
var btn=document.querySelector("#add")
  var check=0

btn.addEventListener("click",function(){
    if(check==0){
    strang.innerHTML="Friends"
    strang.style.color="green"
    btn.innerHTML="Remove Friends"
    check=1
    }else{
    strang.innerHTML="starnger"
    strang.style.color="red"
    btn.innerHTML="Add friends"
    check=0
    }

 })
