let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

deleteBtn.addEventListener("dblclick",()=>{
    localStorage.clear()
    myLeads=[]
    // ulEl.innerHTML=""
    renderLeads()
        })
        
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
  
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
//   console.log(localStorage.getItem("myLeads"))
  let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems+= `
    <li>
        <a href=${myLeads[i]} target="_blank">${myLeads[i]}</a>
    </li>
    `
  }

  ulEl.innerHTML = listItems;
}
