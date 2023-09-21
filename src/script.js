function createNew(ev){
    ev.preventDefault();
    const todo = document.getElementById("todo");
    const taskName = document.getElementById("ftodo").value;
    const unique = Math.random();
    
    if (!taskName) {
        return;
    } else {
        todo.innerHTML += `
        <div class="task bg-white p-2 rounded-2 shadow-sm mt-3" id="${taskName.toLowerCase().split(" ").join("")+unique}" draggable="true" ondragstart="drag(event)">
            <p>${taskName}</p>        
            <button type="button" onclick="deleteTodo('${taskName.toLowerCase().split(" ").join("")+unique}')" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
        </div>
        `
        document.getElementById('ftodo').value = "";
    }
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
}

function deleteTodo(id) {
    const del = document.getElementById(id)
    const result = confirm("Apakah Anda yakin ingin menghapus ?");

    if (result) {
        del.remove();
    }
}