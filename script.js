const btn =  document.querySelector("button");
const post=  document.querySelector(".post");
const widget =  document.querySelector(".star-widget");
const editBtn =  document.querySelector(".edit");

//click on SUBMIT betton
btn.addEventListener ('click' , ()=>{
    widget.style.display === "none";
    post.style.display === "block";
   
    // when you click on edit button:
    editBtn.addEventListener('click' , ()=>{
        widget.style.display === "block";
        post.style.display === "none";
    });
    return false;
});
