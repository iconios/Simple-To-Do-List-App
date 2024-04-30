function SearchItem() {
    var searchVal = document.getElementById("search-input").value;

    if (searchVal.trim()) {

        let searchResult = listItem.filter(Search);
        function Search(item) {
            return (item.toLowerCase()).includes(searchVal.toLowerCase());
        }

        //clear all previous data from the ordered list
        document.getElementById("list-body").innerHTML = "";

        //display all user data (stored in array) in an ordered list
        let ordList = document.getElementById("list-body");
        var userDataLen = searchResult.length;
        for (i = 0; i < userDataLen; i++) {
            let li = document.createElement("li");
            li.textContent = searchResult[i];
            li.setAttribute("class", "mx-4");


            // Create the Edit Button for each list item
            const btnEdit = document.createElement("button");
            btnEdit.setAttribute("type", "button");
            btnEdit.setAttribute("class", "rounded-xl px-3 text-sm bg-yellow-300 mx-2");
            btnEdit.innerText = "Edit";
            btnEdit.addEventListener(onclick, EditItem);


            // Create the Delete Button for each list item
            const btnDel = document.createElement("button");
            btnDel.setAttribute("type", "button");
            btnDel.setAttribute("class", "rounded-xl px-3 text-sm bg-red-300");
            btnDel.innerText = "Del";
            btnDel.addEventListener(onclick, DeleteItem);


            //Attach the list item to Ordered List
            li.appendChild(btnEdit);
            li.appendChild(btnDel);
            ordList.appendChild(li);
        }

    }
    else if(!listItem.length){
        alert("No user data to process")
    }
    else {
        alert("No search item");
    }
}
