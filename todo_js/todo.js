let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText= inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText= "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});
//to delete a task from the list
//(this will only work on the list items already written 
//in the html code)

// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns)
// {
//     delBtn.addEventListener("click",function(){
//        let parent = this.parentElement;
//        console.log(parent);
//        parent.remove;
//     });
// }

//code that will work for all
//we use event delegation
//it makes use of bubbling
//here we add the event listeners for the parent element 
//directly 

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON")
    {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted")
    }
});