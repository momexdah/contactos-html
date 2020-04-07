var contactos = localStorage.getItem('contacto');
contactos=contactos?JSON.parse(contactos):[];
contactos.forEach(mostrarContacto);

function contacto() {
    this.nombre="";
    this.apellido="";
    this.celular="";
    this.correo="";
}

function agregarContacto() {
    gi("divformulario").style.display="inline";
    gi("txtnombre").focus();
}
function gi(id) {
    return document.getElementById(id);
}
function ocultarForm() {
    gi("divformulario").style.display="none";
}
function limpiarForm() {
   gi("txtnombre").value="";
   gi("txtapellido").value="";
   gi("txtcelular").value="";
   gi("txtcorreo").value="";
}

function guardarContacto(event) {
    var indice = contactos.push()-1;
    event.preventDefault();
    con = new contacto();
    con.nombre = gi("txtnombre").value;
    con.apellido = gi("txtapellido").value;
    con.celular = gi("txtcelular").value;
    con.correo = gi("txtcorreo").value;
    contactos.push(con);
    localStorage.setItem("contacto", JSON.stringify(contactos));
    alert("¡Contacto Guardado!");
    mostrarContacto(con,indice);
    limpiarForm();
    ocultarForm();


}

function eliminarContacto (indice,event) {
    //console.log(indice)
    var con = new contacto();
    contactos.splice(indice,1);
    //console.log(contactos);
    //console.log(event.target);
    if(window.confirm("¿Desea eliminar este contacto?")){
        var tr = event.target.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
        localStorage.setItem('contacto',JSON.stringify(contactos));
        alert("Contacto eliminado");
    }


}

function mostrarContacto(contacto,indice) {
    console.log(indice);
    var tabla = gi('tabla');
    tabla.innerHTML +=
    `<tr id = fila class="seleccionada">
        <td>${contacto.nombre}</td>
        <td>${contacto.apellido}</td>
        <td>${contacto.celular}</td>
        <td>${contacto.correo}</td>
        <td><button>Editar</button></td>
        <td><button id="eliminar" onclick="eliminarContacto(${indice},event)">Eliminar</button> </td> 
    </tr>`
    tabla.style.border = "solid";
    }



function editarContacto() {
    con = new contacto();
     

    }
