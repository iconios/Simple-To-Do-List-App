function EditItem(e) {
    //Get the id of the selected item
    let id = e.target.getAttribute("id");

    //Copy the item
    let itemVal = listItem[id];

    //Show the item in a textbox and edit
    let msg = "Please edit your to-do item:";
    let editText = prompt(msg, itemVal);
    if (editText == "") {
        alert("Item cannot be empty");
    }
    else if(editText == null) {
        listItem[id] = itemVal;
    }
    else {
        listItem[id] = editText;

        //clear all previous data from the ordered list
        document.getElementById("list-body").innerHTML = "";

        //display all user data (stored in array) in an ordered list
        DisplayUserData(listItem);

    }

}
