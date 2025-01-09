class Usuario{
    //Atributos
    nombre; 
    apellidos; 
    contrasena;
    interes; 
    fechaNacimiento; 
    indAceptoPoliticas;  

    //Metodos

    constructor(nombre, apellidos, contrasena, interes, fechaNacimiento, indAceptoPoliticas){
        this.nombre=nombre; 
        this.apellidos=apellidos; 
        this.contrasena=contrasena; 
        this.fechaNacimiento=fechaNacimiento;
        this.interes=interes;
        this.indAceptoPoliticas=indAceptoPoliticas;
        
    }


}


//Asignar la función enviar el usuario con el evento del onclik. 
var bntEnviar= document.getElementById("enviar"); 
bntEnviar.addEventListener("click",enviarUser); 

function enviarUser(){
nombre=document.getElementById("nombre").value;
apellidos=document.getElementById("apellidos").value;
//contrasena=document.getElementById("contrasena").value;
fechaNacimiento=document.getElementById("fechaNacimiento").value;
interes=document.getElementById("areasInteres").value;
//indAceptoPoliticas=getElementById("acepto").value;
const u= new Usuario(nombre,apellidos,"", fechaNacimiento,  interes,  "");
console.log(u); 
console.log("Ya estamos en el metodo del boton"); 

}