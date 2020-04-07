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
    event.preventDefault();
    con = new contacto();
    con.nombre = gi("txtnombre").value;
    con.apellido = gi("txtapellido").value;
    con.celular = gi("txtcelular").value;
    con.correo = gi("txtcorreo").value;
    contactos.push(con);
    localStorage.setItem("contacto", JSON.stringify(contactos));
    alert("¡Contacto Guardado!");
    mostrarContacto(con);
    limpiarForm();
    ocultarForm();

}
function mostrarContacto(contacto) {
    var tabla = gi('tabla');
    tabla.innerHTML += `<tr><td>${contacto.nombre}</td><td>${contacto.apellido}</td><td>${contacto.celular}</td><td>${contacto.correo}</td></tr>`
    tabla.style.border = "solid";

    }
