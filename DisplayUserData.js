//DisplayUserData function

function DisplayUserData(someArray) {
    let ordList = document.getElementById("list-body");
    var userDataLen = someArray.length;
    for (i = 0; i < userDataLen; i++) {
        let li = document.createElement("li");
        li.textContent = someArray[i];
        li.setAttribute("class", "mx-4");
        li.setAttribute("id", i);
            

        // Create the Edit Button for each list item
        const btnEdit = document.createElement("button");
        btnEdit.setAttribute("type", "button");
        btnEdit.setAttribute("id", i)
        btnEdit.setAttribute("class", "rounded-xl px-3 text-sm bg-yellow-300 mx-2");
        btnEdit.innerText = "Edit"
        btnEdit.addEventListener("click", EditItem);
           

        // Create the Delete Button for each list item
        const btnDel = document.createElement("button");
        btnDel.setAttribute("type", "button");
        btnDel.setAttribute("id", i);
        btnDel.setAttribute("class", "rounded-xl px-3 text-sm bg-red-300");
        btnDel.innerText = "Del";
        btnDel.addEventListener("click", DeleteItem);

        //Attach the list item to Ordered List
        li.appendChild(btnEdit);
        li.appendChild(btnDel);
        ordList.appendChild(li);
    }

}
