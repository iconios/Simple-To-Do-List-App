function AddItem() {

    var userData = prompt("Please insert your to-do list item");

    if (userData) {
        //Add the user data to an array stack
        listItem.push(userData);
                
        //clear all previous data from the ordered list
        document.getElementById("list-body").innerHTML = "";

        //Display user data
        DisplayUserData(listItem);

    }

}
