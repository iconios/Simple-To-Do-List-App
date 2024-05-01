function DeleteItem(e) {
    //Get the id of the selected item
    let id = e.target.getAttribute("id");

    //Confirm deletion
    if (confirm("Are you sure you want to delete?")) {
        listItem.splice(id, 1);


        //clear all previous data from the ordered list
        document.getElementById("list-body").innerHTML = "";

        //display all user data (stored in array) in an ordered list
        DisplayUserData(listItem);
    }

}
