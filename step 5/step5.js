var a = document.querySelector("#image1");
var b = document.querySelector("#image2");
var c = document.querySelector("#image3");
var d = document.querySelector("#image4");
var e = document.querySelector("#image5");
const change=(id)=> {
    if(id==a){
        a.src = "images/image1_2.jpg";
    }
    else if(id==b){
        b.src = "images/image2_2.jpg";
    }
    else if(id==c){
        c.src = "images/image3_2.jpg";
    }
    else if(id==d){
        d.src = "images/image4_2.jpg";
    }
    else if(id==e){
        e.src = "images/image5_2.jpg";
    }
}
a.addEventListener("mouseover", ()=>{change(a)});
b.addEventListener("mouseover", ()=>{change(b)});
c.addEventListener("mouseover", ()=>{change(c)});
d.addEventListener("mouseover", ()=>{change(d)});
e.addEventListener("mouseover", ()=>{change(e)});

const restore=(id)=> {
    if(id==a){
        a.src = "images/image1.jpg";
    }
    else if(id==b){
        b.src = "images/image2.jpg";
    }
    else if(id==c){
        c.src = "images/image3.jpg";
    }
    else if(id==d){
        d.src = "images/image4.jpg";
    }
    else if(id==e){
        e.src = "images/image5.jpg";
    }
}
a.addEventListener("mouseout", ()=>{restore(a)});
b.addEventListener("mouseout", ()=>{restore(b)});
c.addEventListener("mouseout", ()=>{restore(c)});
d.addEventListener("mouseout", ()=>{restore(d)});
e.addEventListener("mouseout", ()=>{restore(e)});