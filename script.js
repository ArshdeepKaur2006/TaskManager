function getAndupdate(){
    let title=document.getElementById("title").value;
    let desc=document.getElementById("desc").value;
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
        itemJsonArray.push([title,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }else{
        itemJsonArrayStr=localStorage.getItem('itemsJson')
         itemJsonArray=JSON.parse(itemJsonArrayStr);
         itemJsonArray.push([title,desc]);
         localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    update();
}
function update(){
  if(localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr=localStorage.getItem('itemsJson')
         itemJsonArray=JSON.parse(itemJsonArrayStr)
    }
    let tableBody=document.getElementById("tableBody");
let str="";

itemJsonArray.forEach((element,index )=> {
    str+=`
    <tr>
                    <td scope="row">${index + 1}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btnTable" onclick="deleted(${index})">Delete</button></td>
                </tr>
                `
                
});
tableBody.innerHTML=str;
}

let add=document.getElementById("add");
add.addEventListener("click",getAndupdate);
update();
function deleted(itemIdx){
   itemJsonArrayStr=localStorage.getItem('itemsJson')
     itemJsonArray=JSON.parse(itemJsonArrayStr);
     itemJsonArray.splice(itemIdx,1);
      localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
      update();
}
function clearSt(){
    if(confirm("Do you really want to clear?")){
       localStorage.clear();
    update();
    }
  
}