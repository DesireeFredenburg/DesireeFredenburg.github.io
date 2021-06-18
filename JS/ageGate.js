//This function calls the age gate. 
function onload() { 
document.getElementById("ageGate").onload = myAgeGate() ;
}
//remember me check box function
function checkBox() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("check");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

//These functions open and close the contact from
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    // this.close(); FIX
}

