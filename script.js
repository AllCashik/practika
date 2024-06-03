/*let header_but = document.querySelector(".icon");
header_but.addEventListener("click",function (){
    let header = document.querySelector("header");
    if (header.classList.contains("open")){
        close();
    }
    else {
        header.classList.add("open");
        header_but.querySelector("img").src = "free-icon-close-4013407.png";
    }
})*/
/*function open_img() {
    let src = document.querySelector(".kartinki img").src, popka_img = document.querySelector("#img_popka");
    popka_img.querySelector("img").src = src;
    popka_img.classList.add("open");
}

let all_img = document.querySelectorAll(".kartinki img");
for (let img of all_img){
    img.addEventListener("click", open_img, false)
}
document.querySelector("#img_popka").addEventListener("click", function (){
    this.classList.remove("open");
});*/
/*function close(){
    document.querySelector("header").classList.remove("open");
    /!*header_but.querySelector("img").src = "free-icon-menu-bar-7782682.png";*!/
}

document.querySelector(".kartinki").addEventListener("click", close, false);
document.querySelector("header .popka").addEventListener("click", close, false);*/

document.querySelector("#show_add").addEventListener("click", function (){
    document.querySelector("#add_tab").classList.add("open");
});

document.querySelector(".cancel_but").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#add_tab").classList.remove("open");
});



/*
document.querySelector(".add_but").addEventListener("click", function (){
    let src = document.querySelector("#src_input").value;
    if (src != ""){
        let new_img = document.createElement("img");
        new_img.src = src;
        document.querySelector(".kartinki").prepend(new_img);
        document.querySelector("#add_tab").classList.remove("open");
        document.querySelector("#src_input").value = "";
        new_img.addEventListener("click", open_img, false)
    }
    else{
        document.querySelector("#src_input").classList.add("error");
    }
});*/
