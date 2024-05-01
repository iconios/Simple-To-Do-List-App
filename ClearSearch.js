function ClearSearch() {
    //clear all previous data from the ordered list
    document.getElementById("list-body").innerHTML = "";

    //Clear the search bar too
    document.getElementById("search-input").value = "";

    if (listItem.length) {
        //display all user data (stored in array) in an ordered list
        DisplayUserData(listItem);
    }
    else {
        alert("Nothing to clear");
    }
}
