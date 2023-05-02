const btn =  document.querySelector(".submit");
const post=  document.querySelector(".post");
const widget =  document.querySelector(".star-widget");
const editBtn =  document.querySelector(".edit");
const txt = document.querySelector(".txt");
const howWeDo = document.querySelector(".theTop");

//click on SUBMIT betton
btn.addEventListener ('click' , ()=>{
    widget.style.display = "none";
    post.style.display = "block";
    txt.style.display = "none";
    howWeDo.style.display = "none";

   
    // when you click on edit button:
    editBtn.addEventListener('click' , ()=>{
        widget.style.display = "block";
        post.style.display = "none";
        txt.style.display = "block";
        howWeDo.style.display = "block";
    });
    return false;
});
