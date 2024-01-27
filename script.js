var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById('name').value;
    if(name.length == 0){
        nameError.innerHTML = 'name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)){
        nameError.innerHTML = 'enter first and last name';
        return false;
    }
    nameError.innerHTML = '<i id="check-1" class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMobile(){
    var mobile = document.getElementById('mobile').value;

    if(mobile.length == 0){
        phoneError.innerHTML = 'mobile no. is required'
        return false
    }
    if(!mobile.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "enter valid mobile number";
        return false;
    }

    phoneError.innerHTML = '<i id="check-2" class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMail(){
    var mail = document.getElementById('mail').value;

    if(mail.length==0){
        emailError.innerHTML = 'mail is required'
        return false
    }
    if(!mail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML = 'email invalid';
        return false;
    }

    emailError.innerHTML = '<i id="check-3" class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateMobile() || !validateMail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display='none'},3000);
        return false;
    }
    var check1 = document.getElementById('check-1');
    var check2 = document.getElementById('check-2');
    var check3 = document.getElementById('check-3');

    check1.style.display="none";
    check2.style.display="none";
    check3.style.display="none";
    addData();
}

function addData() {
    // Get the input values
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let mail = document.getElementById("mail").value;
  
    // Create a new list item
    let listItem = document.createElement("li");
  
    // Set the text of the list item to the input values
  
    listItem.textContent = `${name}  ${mobile}  ${mail}`;
  
    // Append the new list item to the existing list
    document.getElementById("list").appendChild(listItem);
  
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("mail").value = "";
  
    var btn = document.getElementById("del");
  
      // Append the delete button to the list
    document.getElementById("list").parentNode.appendChild(btn);
    btn.style.display = "flex";
  }
  
  var btn = document.getElementById("del");
  
  btn.addEventListener("click", function () {
    var list = document.getElementById("list");
    var lastItem = list.lastElementChild;
  
    // Check if the list has more than one item
    if (list.childElementCount > 0) {
      lastItem.remove();
    }
  
    if(list.childElementCount == 0){
      btn.style.display = "none";
    }
  
    
  });
