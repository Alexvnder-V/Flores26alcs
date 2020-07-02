function probar() {
    alert("La aplicacion funciona")
}
/*Desarrollo01 */
function borrar() {
    document.getElementById('nota').value="";
    document.getElementById('categoria').value="";
};
function aceptar() 
{
    let ver="";
    let nc=document.getElementById('nota').value;
    if (nc>=17) {
        ver="A";
    }
    else if (nc>=14 && nc<17) {
        ver="B";
    } 
    else if (nc>=12 && nc<14){
        ver="C";
    }
    else{
        ver="D"
    }
document.curso.categoria.value = ver;  
};


/*Desarrollo02 */
function categoriaA() {
    document.navidad.categoriaD02.value="A";
    let sueldo = 2350;
    document.navidad.sueldoBD02.value= sueldo; 
}
function categoriaB() {
    document.navidad.categoriaD02.value="B";
    let sueldo = 2000;
    document.navidad.sueldoBD02.value= sueldo; 
}
function categoriaC() {
    document.navidad.categoriaD02.value="C";
    let sueldo = 1850;
    document.navidad.sueldoBD02.value= sueldo; 
}
function categoriaD() {
    document.navidad.categoriaD02.value="D";
    let sueldo = 1500;
    document.navidad.sueldoBD02.value= sueldo; 
}
function pContratado(){
    document.navidad.respuestaprofe.value="Contratado";
    let pD02 = 0.10;
    document.navidad.porceD02.value = pD02;

}
function pNombrado(){
    document.navidad.respuestaprofe.value="Nombrado";
    let pD02 = 0.15;
    document.navidad.porceD02.value = pD02;
}
function calcularD02() {
    let hijosput = document.getElementById("d02hijos").value;
    let brutoSueldoD02 = document.navidad.sueldoBD02.value;
    let decimalesD02= document.getElementById("porceD02").value;
    let hijosputBoni = 0;
    laboralBoniD02 = brutoSueldoD02*decimalesD02;

    if (hijosput<=3) {
        hijosputBoni = hijosput * 25;
        document.resultadosD02.boniHijosD02.value = hijosputBoni;
    }

    else{
        hijosput = hijosput-3;
        hijosputBoni = 75 + hijosput*10;
        document.resultadosD02.boniHijosD02.value = hijosputBoni;
    }
    totalbonifiD02 = laboralBoniD02 + hijosputBoni;
    document.resultadosD02.boniLaboralD02.value = laboralBoniD02;
    document.resultadosD02.boniTotalD02.value = totalbonifiD02;
}
/*Desarrollo03 */
function borrarD03() {
    document.getElementById('importemes').value="";
    document.getElementById('cantidad').value="";
    document.getElementById('comision').value="";
    document.getElementById('bonificacion').value="";
    document.getElementById('sueldobruto').value="";
    document.getElementById('descuento').value="";
    document.getElementById('sueldoneto').value="";

};
function calcularD03() {
    
    let itotal=document.getElementById('importemes').value;
    let hijos=parseInt(document.getElementById('cantidad').value);

    boni=50*hijos;
    comi=(itotal * 0.075)+boni;
    sueldob=(600 + comi).toFixed(2);
    descu=(sueldob*0.11).toFixed(2);
    sueldon=sueldob-descu;

    document.trabajo.comision.value= comi.toFixed(2);
    document.trabajo.bonificacion.value=boni;
    document.trabajo.sueldobruto.value=sueldob;
    document.trabajo.descuento.value=descu;
    document.trabajo.sueldoneto.value=sueldon.toFixed(2);
}   ;


