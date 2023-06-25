
let myLeads =["www.1.com","www.2.com","www.3.com"]

const inputEl= document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")


inputBtn.addEventListener("click",()=>{
    
    myLeads.push(inputEl.value)
    console.log(myLeads)
    
})

let listItems=""

for(let i=0;i<myLeads.length;i++){
    listItems+="<li>" + myLeads[i] + "</li>"

}

ulEl.innerHTML = listItems




