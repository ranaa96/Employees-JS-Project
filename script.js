/* <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Salary</th>
      <th scope="col">Gender</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>
      <button class="btn btn-warning">Delete</button>
      <button class="btn btn-primary">Edit</button>
      </td>
    </tr>
    <tr>
     ......
    </tr>
    
  </tbody>
</table> */
var employees = [
    { 'Id': 1, 'Name': 'Rana', 'Age': 23, 'Salary': 3000, 'Gender': 'Female' },
    { 'Id': 2, 'Name': 'Ali', 'Age': 30, 'Salary': 2000, 'Gender': 'Male' }
];


var eTable =document.getElementById('employesTable');

function drawEmployeeTable(){
    var html= '<table class="table table-striped"><thead><tr>'+
        '<th scope="col">Id</th>'+
        '<th scope="col">Name</th>'+
        '<th scope="col">Age</th>'+
        '<th scope="col">Salary</th>'+
        '<th scope="col">Gender</th>'+
        '<th scope="col">Action</th>'+
        '</tr></thead><tbody>' ;
   
     for(e of employees) {
        html+='<tr><th scope="row">'+e.Id+'</th>'+
        '<td>'+e.Name+'</td><td>'+e.Age+'</td><td>'+e.Salary+'</td>'+
        '<td>'+e.Gender+'</td>'+
        '<td>'+
        '<button class="btn btn-danger" onClick="deleteEmployee('+employees.indexOf(e) +')">Delete</button>'+
        '<button class="btn btn-primary" onClick="editEmployee('+ employees.indexOf(e)+')">Edit</button>'+
        '</td></tr>' ;
       
        
    }

    html+='</tbody></table>';
    eTable.innerHTML=html;
    
}

drawEmployeeTable();



function saveToEmployess(){
    var eName = document.getElementById('inputName').value;
    var eAge = document.getElementById('inputAge').value;
    var eSalary = document.getElementById('inputSalary').value;
    var eGender= document.getElementById('inputGender').value;

    var lastIndex = employees.length-1 ; 
    newId = employees[lastIndex].Id + 1   ;

    var newE = { 'Id': newId , 'Name': eName, 'Age': eAge, 'Salary': eSalary, 'Gender': eGender } ;
    employees.push(newE);

    displayView();
    drawEmployeeTable();
}


var dView = document.getElementById('view');
var dDetails =document.getElementById('details');

function displayView(){
    dView.removeAttribute("class");
    dDetails.setAttribute("class","hide");
}

function displayDetails(){
    dView.setAttribute("class","hide");
    dDetails.removeAttribute("class");
}


function addEmployee() {
   
    document.getElementById('inputName').value = '';
    document.getElementById('inputAge').value = '';
    document.getElementById('inputSalary').value = '';
    document.getElementById('inputGender').value = 'Choose...';
    displayDetails();
} 

function deleteEmployee(index){
    employees.splice(index, 1);
    drawEmployeeTable();

}

function editEmployee(index){
    displayDetails();
    document.getElementById('inputName').value=employees[index].Name;
    document.getElementById('inputAge').value=employees[index].Age;
    document.getElementById('inputSalary').value=employees[index].Salary;
    document.getElementById('inputGender').value=employees[index].Gender;

}