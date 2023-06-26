let myLeads = [];
let oldLeads =[]
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = "";
  
    for (let i = 0; i < leads.length; i++) {
      listItems+= `
      <li>
          <a href=${leads[i]} target="_blank">${leads[i]}</a>
      </li>
      `
    }
  
    ulEl.innerHTML = listItems;
  }
  

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  //   console.log(localStorage.getItem("myLeads"))
  let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
  console.log(leadsFromLocalStorage)
  render(myLeads);

});

deleteBtn.addEventListener("dblclick",()=>{
    localStorage.clear()
    myLeads=[]
    // ulEl.innerHTML=""
    render(myLeads)
        })
