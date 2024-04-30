function AddItem() {

    var userData = prompt("Please insert your to-do list item");

    if (userData) {
        //Add the user data to an array stack
        listItem.push(userData);
                
        //clear all previous data from the ordered list
        document.getElementById("list-body").innerHTML = "";

        //display all user data (stored in array) in an ordered list
        let ordList = document.getElementById("list-body");
        var userDataLen = listItem.length;
        for (i = 0; i < userDataLen; i++) {
            let li = document.createElement("li");
            li.textContent = listItem[i];
            li.setAttribute("class", "mx-4")
            

            // Create the Edit Button for each list item
            const btnEdit = document.createElement("button");
            btnEdit.setAttribute("type", "button");
            btnEdit.setAttribute("class", "rounded-xl px-3 text-sm bg-yellow-300 mx-2");
            btnEdit.innerText = "Edit"
            btnEdit.addEventListener(onclick, EditItem);
            

            // Create the Delete Button for each list item
            const btnDel = document.createElement("button");
            btnDel.setAttribute("type", "button");
            btnDel.setAttribute("class", "rounded-xl px-3 text-sm bg-red-300");
            btnDel.innerText = "Del"
            btnDel.addEventListener(onclick, DeleteItem);


            //Attach the list item to Ordered List
            li.appendChild(btnEdit);
            li.appendChild(btnDel);
            ordList.appendChild(li);
        }

    }

}
