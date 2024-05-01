function SearchItem() {
    var searchVal = document.getElementById("search-input").value;

    if (searchVal.trim()) {

        searchResult = listItem.filter(Search);
        function Search(item) {
            return (item.toLowerCase()).includes(searchVal.toLowerCase());
        }

        //clear all previous data from the ordered list
        document.getElementById("list-body").innerHTML = "";

        //display all user data (stored in array) in an ordered list
        DisplayUserData(searchResult);

    }
    else if(!listItem.length){
        alert("No user data to process")
    }
    else {
        alert("No search item");
    }
}
