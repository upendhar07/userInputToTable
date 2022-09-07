(function(){
var row=1;

let entry = document.getElementById("entry")
entry.addEventListener("click", displayDetails);


function displayDetails(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let className = document.getElementById("className").value;
    if(!name || !age || !className){
        alert("please fill all")
        return;
    }
    let display =document.getElementById("display");
    let  newRow = display.insertRow(row);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML =name;
    cell2.innerHTML = age;
    cell3.innerHTML= className;

    row++;


}
})();

