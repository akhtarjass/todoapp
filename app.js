var secDiv = document.getElementById("secondDiv")
var list = document.getElementById("list")


function addInput(){
    
    var add =  document.getElementById("todoIn")
    if(add.value){
    var li = document.createElement("li")
    var liText = document.createTextNode(add.value)
//    d1.setAttribute("onMouseover","iconOn()")
//    d1.setAttribute("onMouseout","iconOut()")
    li.setAttribute("id","li_1")
    list.appendChild(li)
    li.appendChild(liText)

    
    var editBtn = document.createElement("button")
    var editText =  document.createTextNode("EDIT")
    editBtn.setAttribute("class","addBtn")
    editBtn.setAttribute("onclick","addItem(this)")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    delBtn.setAttribute("class","addBtn")
    delBtn.setAttribute("onclick","delItem(this)")
    delBtn.setAttribute("float","right")
    li.appendChild(delBtn)
    add.value = "";
}
}

function addItem(a){
    var val = a.parentNode.firstChild.nodeValue;
    console.log(val)
    var editVal = prompt("Edit Your Task",val)
    a.parentNode.firstChild.nodeValue = editVal
}
function delItem(a){
    a.parentNode.remove()
}
function delInput(){
    list.innerHTML = "";
}

// function iconOn(){
    
//     var d1 = document.getElementById("d1");
//     var delSpan = document.createElement("span")
//     d1.appendChild(delSpan)
//     delIcon = document.createElement("i")
//     delIcon.setAttribute("class", "fa fa-trash-o")
//     delIcon.setAttribute("aria-hidden","true")
//     delSpan.appendChild(delIcon)

//     var editSpan = document.createElement("span")
//     d1.appendChild(editSpan)
//     editIcon = document.createElement("i")
//     editIcon.setAttribute("class", "fa fa-trash-o")
//     editIcon.setAttribute("aria-hidden","true")
//     delSpan.appendChild(editIcon)
    
// }