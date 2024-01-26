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

    document.getElementById("name").value = '';
    document.getElementById("mobile").value = '';
    document.getElementById("mail").value = '';
   
}