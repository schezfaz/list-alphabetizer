var separateBy;
var displayBy;
var sortUsing;
var sortOrder;

function seperateMethod() {
    var radioButtons = document.querySelector('input[name="separate-by"]:checked').value;
    switch(radioButtons) {
        case "separate-new-lines":
            separateBy = /\n/g;
            break;
        case "separate-commas":
            separateBy = ","
            break;
        case "separate-custom":
            separateBy = document.getElementById("separate-custom-input").value;
            break;
    }
}

function displayMethod() {
    var radioButtons = document.querySelector('input[name="display-by"]:checked').value;
    switch(radioButtons) {
        case "display-new-lines":
            displayBy = "<br />"
            break;
        case "display-commas":
            displayBy = ", "
            break;
        case "display-custom":
            displayBy = document.getElementById("display-custom-input").value;
            break;
    }
}

function sortUsingMethod() {
    var radioButtons = document.querySelector('input[name="sort-using"]:checked').value;
    switch(radioButtons) {
        case "alphabetically":
            sortUsing = function(array) {
                return array.sort()
            }
            break;
        case "numerically":
            sortUsing = function(array) {
                return array.sort((a, b) => a - b)
            }
            break;
        case "word-length":
            sortUsing = function(array) { 
                return array.sort((a, b) => a.length - b.length)
            }
            break;
    }
}

function sortOrderMethod() {
    var radioButtons = document.querySelector('input[name="sort-order"]:checked').value;
    switch(radioButtons) {
        case "increasing-order":
            sortOrder = function(array) {
                return array
            }
            break;
        case "decreasing-order":
            sortOrder = function(array) {
                return array.reverse()
            }
            break;
    }
}

function listSort() {
    seperateMethod();
    displayMethod();
    sortUsingMethod();
    sortOrderMethod();

    var listInput = document.getElementById("list-input").value;
    var sortedList = document.getElementById("sorted-list-op");

    var separateArray = listInput.split(separateBy);

    separateArray = document.getElementById("remove-duplicates").checked ? [...new Set(separateArray)] : separateArray
    separateArray = document.getElementById("ignore-characters") 
        ? separateArray.map(x => x.substr(document.getElementById("ignore-characters-input").value)) 
        : separateArray

    var sortArray = sortUsing(separateArray.filter(x => x!=""));
    var orderedArray = sortOrder(sortArray);
    var jointArray = orderedArray.join(displayBy);

    sortedList.innerHTML = jointArray;
}


function copySortedList() {
    var sortedList = document.getElementById("sorted-list-op");
    sortedList.select(); //selects everything within the div where id = "sorted-list"
    document.execCommand("copy");
    alert("copied");

    // if (document.selection) { 
    //     var range = document.body.createTextRange();
    //     range.moveToElementText(sortedList);
    //     range.select().createTextRange();
    //     document.execCommand("copy"); 
    
    // } else if (window.getSelection) {
    //     var range = document.createRange();
    //      range.selectNode(sortedList);
    //      window.getSelection().addRange(range);
    //      document.execCommand("copy");
    //      alert("Text copied") 
    // }
}

function removeDuplicates() {

}