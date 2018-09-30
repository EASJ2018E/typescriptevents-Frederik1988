document.getElementById("addbtn").addEventListener("click",addGrocery)


function addGrocery(){
    let count = 1
    let inputElement = document.getElementById("addText")
    let inputText = (<HTMLInputElement>inputElement).value

    let newLi = document.createElement("li")
    let newText = document.createTextNode(inputText.toString())
    newLi.setAttribute("class", "usundt")
    newLi.appendChild(newText)
    document.getElementById("listeUsund").appendChild(newLi)
    
    for (let i = 0; i< document.getElementById("listeUsund").childElementCount; i++){
        document.getElementById("listeUsund").children[i].id = "vare" + count
        count++
    }
    
}
