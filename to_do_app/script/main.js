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
        var msg = document.querySelector(".msg");
        msg.classList.add("alert");
        msg.classList.add("alert-warning");
        msg.innerHTML = "NO item to add";
    }
}
function clearMsg(){
    var msg = document.querySelector(".msg");
    msg.innerHTML = "";
}
function clearUL(){
    document.querySelector(".listView").innerHTML = "";
}
function attachItem(){
    var ul = document.querySelector(".listView");
    for(var i=0 ; i<itemList.length ; i++){
        var li = makeListItem(itemList[i]);
        ul.appendChild(li);
    }
}
function makeListItem(text){
  var li = document.createElement("li");
  li.classList.add("list-group-item");
  var button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("btn-outline-secondary");

  button.innerHTML = "x";
  button.onclick = function (){
      clearMsg();
      deleteItem(this);
  }

  var textnode = document.createTextNode(text);
  
  li.appendChild(button);
  li.appendChild(textnode);
  return li;

}

function deleteItem(button){
    var item = button.parentNode.lastChild.textContent;
    var index = itemList.indexOf(item);
    if(index !== -1){
        itemList.splice(index,1);
        clearUL();
        attachItem();
    }
}

attachItem();