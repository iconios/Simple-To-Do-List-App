
let listItem = [];

function SearchItem (){
    var searchVal = document.getElementById("search-input").value;

    //Check if the search item is in the array storage
    const searchElement = "'" + searchVal + "*'"
    const regex = new RegExp(searchElement);

    console.log(regex.test(listItem));
    //if (listItem.includes(searchVal)) {

        //If yes, locate the search item in the array
        //listItem.find(searchVal);

        //check for the index of the search to-do list item
        //var ind = listItem.indexOf(searchVal);
       // ind += 1;

        //Highlight the indexed line on the browser
        //let pos = document.getElementById("list-body");
        

    }
    //else {
        //alert("No search item in the to-do list")
   // }


function EditItem(){

}

function DeleteItem(){

}