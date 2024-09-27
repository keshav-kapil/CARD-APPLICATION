var selectedRow=null;

function showAlert(message,className){
    const div=document.createElement("div");
    div.className=`alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container=document.querySelector(".container");
    const main=document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(()=>document.querySelector(".alert").remove(),3000);
}

function clearFields(){
    document.querySelector("#firstName").value="";
    document.querySelector("#LastName").value="";
    document.querySelector("#RollNumber").value="";
}
document.querySelector("#student-form").addEventListener("submit",(e) =>{
    e.preventDefault();

    const firstName=document.querySelector("#firstName").value;
    const LastName=document.querySelector("#LastName").value;
    const RollNumber=document.querySelector("#RollNumber").value;

if(firstName==""||LastName==""||RollNumber==""){
    showAlert("Please fill in all fields","danger");
}
else{
    if(selectedRow==null){
        const list=document.querySelector("#student-list");
        const row=document.createComment("tr");

        row.innerHtml =`
        <td>${firstName}</td>
        <td>${LastName}</td>
        <td>${RollNumber}</td>
        <td>
         <a href="#" class="btn btn-warning btn-sm edit">EDIT</a>
                            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        `;
        list.appendChild(row);
        selectedRow=null;
        showAlert("Student Added","success");
    }
    else{
selectedRow.children[0].textContent = firstName;
selectedRow.children[1].textContent = LastName;
selectedRow.children[2].textContent = RollNumber;
selectedRow=null;
showAlert("Student Info Edited","info");
    }
    clearFields();
    }
}

);

document.querySelector("#student-list").addEventListener("click",(e)=>{
    target=e.target;
    if(target.classList.contains("edit")){
        selectedRow=target.parentElement.parentElement;
        document.querySelector("#firstName").value=selectedRow.children[0].textContent;
        document.querySelector("#LastName").value=selectedRow.children[1].textContent;
        document.querySelector("#RollNumber").value=selectedRow.children[2].textContent;
    }
}
)
document.querySelector("#student-list").addEventListener("click",(e)=>{
target=e.target;
if(target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
    showAlert("Student Data Deleted","danger")
}
})