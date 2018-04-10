var rLine, table = document.getElementById("table");  //getting the table element


var mySubmit = document.querySelector("#submit");      //querying the submit button, added eventlistener and called preventdefault.
mySubmit.addEventListener("click", function(event){    //and my addcontact function.
    event.preventDefault();
    addContact();
});
                          
var buttonEdit = document.querySelector("#buttonEdit"); //querried editbutton and added event listener to call editrow functon.
buttonEdit.addEventListener("click", editRow);

var buttonDelete = document.querySelector("#buttonDelete"); //querried delete button and added eventlistener to call deleterow button.
buttonDelete.addEventListener("click", deleteRow);

$(document).ready(function(){                   // Used Jquerry toggle function to hide and show table by clicking the show/hide button.
    $("#buttonAll").click(function(){
        $("table").toggle();
    });
});





function addContact(){
    
var userName = document.querySelector("#fullName").value;      //name value inputed into username variable
var userNumber = document.querySelector("#myNumber").value;     //phone number value inputed into usernumber variable
var userEmail = document.querySelector("#myEmail").value;       //email value inputed into useremail variable

                  
    
var allContacts = table.insertRow(table.rows.length);          //inserting row into table
    
var cell1 = allContacts.insertCell(0);                         //inserting cells to row
var cell2 = allContacts.insertCell(1);
var cell3 = allContacts.insertCell(2);
var cell4 = allContacts.insertCell(3);

    
    
for (var i=0; i < table.rows.length;  i++){                     //This is to set counter to add serial number to the table
    var counter = i;
}

    

cell1.innerHTML = counter;                                //This adds my input values saved into variables into the created cells
cell2.innerHTML = userName;
cell3.innerHTML = userNumber;
cell4.innerHTML = userEmail;

    

selectRow();                                            // calling select row function
 


};


function selectRow(){
        for (var i=1; i<table.rows.length; i++){
        table.rows[i].addEventListener("click", function(){ 
        rLine = this.rowIndex;
        document.querySelector("#fullName").value = this.cells[1].innerHTML;
        document.querySelector("#myNumber").value = this.cells[2].innerHTML;
        document.querySelector("#myEmail").value = this.cells[3].innerHTML;
          
        });
             
        };
        };

function editRow(){                                              // edit row function
var userName = document.getElementById("fullName").value;
var userNumber = document.getElementById("myNumber").value;
var userEmail = document.getElementById("myEmail").value;
    
table.rows[rLine].cells[1].innerHTML = userName;
table.rows[rLine].cells[2].innerHTML = userNumber;
table.rows[rLine].cells[3].innerHTML = userEmail;
}
    

function deleteRow(){                                             //delete row function
    table.deleteRow(rLine);
    document.getElementById("fullName").value = " ";
    document.getElementById("myNumber").value = " ";
    document.getElementById("myEmail").value =  " ";

};








