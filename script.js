let contactList = []


function addNew(name, number){
    contactList.push({id: contactList.length + 1, name, number, revealed: false, hidden: false})
}
function render(){
    document.getElementById("contacts").innerHTML = ''
    for(let i of contactList){
        if(!i.hidden){
        let node = document.createElement("p")
        node.innerHTML = 'Name: ' + i.name + '  ' + 'Number: ' + i.number
        document.getElementById("contacts").appendChild(node)
            node.addEventListener('click', () => {
                revealOptions(i.id)
                render()
            })
            if(i.revealed){
                let node = document.createElement('button')
                node.innerHTML = "Edit contact"
                document.getElementById("contacts").appendChild(node)
                    node.addEventListener('click', () =>{
                        edit(i.id)
                        i.revealed = false
                        render()
                    })
                node = document.createElement('button')
                node.innerHTML = "Delete"
                document.getElementById("contacts").appendChild(node)
                    node.addEventListener('click', () =>{
                        remove(i.id)
                        i.revealed = false
                        render()
                    })
                
            }
        }
    }
        
}
function makeNew(){
    let a = prompt('Enter name')
    let b = prompt('Enter number')
    addNew(a, b)
    render()
}
function revealOptions(j){
    contactList.find(c => j === c.id ).revealed = !contactList.find(c => j === c.id ).revealed
}
function edit(i){
    if(confirm('Do you want to change name?')){
        let a = prompt('Enter name')
        contactList.find(c => i === c.id).name = a
    } else if(confirm('Do you want to change number?')){
        let b = prompt ('Enter number')
        contactList.find(c => i === c.id).number = b
    } 
}
function remove(i){
    contactList = contactList.filter(c => c.id !== i)
}
function search(e){
    let a = e.target.value
    contactList.forEach(c=> c.hidden = !(c.name.startsWith(a) || c.number.startsWith(a)))
    render()
}