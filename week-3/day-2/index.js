function addItem(){
    var txt = document.getElementById('toDoItem');
    console.log(txt.value);
    var newItem = document.createElement('li');
    newItem.innerHTML = txt.value;
    var itemList = document.getElementById('taskList');
    itemList.appendChild(newItem);
    txt.value = '';
}