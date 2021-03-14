var Name = document.getElementById("name");
var Surname = document.getElementById("surname");
var City = document.querySelector("#city");
var btn = document.querySelector("button");
btn.addEventListener("click",function Reset(){
    var a = confirm("do you want to reset?");
    if(a == true){
        Name.value = null;
        Surname.value = null;
        City.value = null;

    }
})
    
