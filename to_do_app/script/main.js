var itemList = [
    "Go to market",
    "Clean your desk",
    "Do code",
    "Drink water",
];

document.querySelector("#addButton").addEventListener("click",addItem);

function addItem(){
    var input = document.querySelector("#inputField");
    var item = input.value;
    if(item){
        itemList.push(item);
        clearMsg();
        clearUL();
        attachItem();
        input.value = "";
    }
    else{
        document.querySelector(".msg").innerHTML = "NO item to add";
    }
}
function clearMsg(){
    document.querySelector(".msg").innerHTML = "";
}
function clearUL(){
    document.querySelector(".listView").innerHTML = "";
}
function attachItem(){
// have to write;
}
