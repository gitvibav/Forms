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


