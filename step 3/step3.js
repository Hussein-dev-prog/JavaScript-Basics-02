
 var div = document.querySelector("div"); 
 var input = document.querySelector("input");
input.addEventListener("change",function () {
 var show=input.value;
  div.innerHTML=show; 
})  