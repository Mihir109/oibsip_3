const inputbox= document.getElementById("input-box");
const listcontainer= document.getElementById("list-container");

function addtask()
{
   if(inputbox.value==='')
   {
    alert("Task cannot be blanked");
   } 
   else
   {
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    listcontainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
   }
   inputbox.value="";
   save();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false);

function save(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function display(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
display();