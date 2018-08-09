let links = document.querySelectorAll(".close");

links.forEach(function(link){

  link.addEventListener("click",function(ev){
    ev.preventDefault();

    let content = document.querySelector(".content");

    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    content.classList.add("animated");
    content.classList.add("fadeOutUp");

    setTimeout(function(){
      location.href = "../index.html";
    },600);

    return false;

    });
});
