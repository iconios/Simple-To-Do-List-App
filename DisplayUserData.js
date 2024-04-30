//DisplayUserData function

function DisplayUserData(someArray) {
    let ordList = document.getElementById("list-body");
    let userDataLen = someArray.length;
    for (i = 0; i < userDataLen; i++) {
        let li = document.createElement("li");
        li.textContent = someArray[i];
        li.setAttribute("class", "text-sm pl-2");


        // Create the Edit Button for each list item
        const btnEdit = document.createElement("button");
        btnEdit.setAttribute("type", "button");
        btnEdit.setAttribute("class", "bg-blue-500 px-5 ml-3 rounded-lg text-sm");
        btnEdit.innerText = "Edit";
        btnEdit.addEventListener(onclick, EditItem);


        // Create the Delete Button for each list item
        const btnDel = document.createElement("button");
        btnDel.setAttribute("type", "button");
        btnDel.setAttribute("class", "bg-red-500 px-5 ml-2 rounded-lg text-sm");
        btnDel.innerText = "Del";
        btnDel.addEventListener(onclick, DeleteItem);


        //Attach the list item to Ordered List
        li.appendChild(btnEdit);
        li.appendChild(btnDel);
        ordList.appendChild(li);
    }
}
