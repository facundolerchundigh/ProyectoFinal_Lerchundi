/* STYLE */

$(".headerLogo").css({
	"width": "100px",
	"height":"100px",
	"border-radius": "50%",
	"margin": "2px 30px" 
});
$(".tituloMarca").css({
    "font-size": "5rem",
    "font-weight":"700" ,
    "color": "black",
    "text-shadow":"5px 5px 2.5px rgba(0, 0, 0, 0.23)",
    "-webkit-text-stroke": "2px rgba(0,0,0,.15)"
    })



/* Finalizando compra */

const traerPrecio =  sessionStorage.getItem('precioTotal');

const mostrarMensaje = () => {
    const nombrePersona = document.getElementById("nombre").value;
    const emailPersona = document.getElementById("mail").value;
    const telefonoPersona = document.getElementById("telefono").value;
    const direccionPersona = document.getElementById("domicilio").value;

 $(".mensajeContainer").append( `<div class="mensaje-final">
 <h1 class="mensajeGracias">Gracias ${nombrePersona} por su compra de $${traerPrecio}!! </h1> 
 <h3 class="formaDePago">Desea pagar con tarjeta/deposito o en efectivo?</h3>
<button id="buttonEfectivo"class="botonPago">Efectivo</button>
<button id="buttonTarjeta"class="botonPago">Tarjeta</button>
 </div>`);

 $("#buttonEfectivo").click(() =>{
     $(".formaDePago, #buttonEfectivo, #buttonTarjeta, .formulario_compra, .mensajeGracias ").hide();
    $(".mensajeContainer").append(
        `<h1 class="mensajeGracias">Gracias ${nombrePersona} por su compra de $${traerPrecio}!! </h1>
        <h3>Ha seleccionado pagar en efectivo!</h3>
        <h4>Tendrá que confirmar los mensajes que le enviaremos a sus datos de contactos ${telefonoPersona} y ${direccionPersona}. Luego de arreglar el pedido, podrá retirarlo en nuestor local o recibir su paquete dentro de las 48 horas en ${direccionPersona}</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.626228894333!2d-58.557258375060925!3d-34.563017868756226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9e22eacd55d%3A0x73a67aaf0b7ad97b!2sJumbo!5e0!3m2!1ses-419!2sar!4v1638284523740!5m2!1ses-419!2sar" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <button  class="btn btn-danger m-4" onclick="location.href='index.html'">Volver a Home</button>`
    )
})

$("#buttonTarjeta").click(() =>{
    $(".formaDePago, #buttonEfectivo, #buttonTarjeta, .formulario_compra, .mensajeGracias ").remove();
   $("body").append(
       `<section class="container containerTarjeta">
       <div class="row">
        <h3 class="text-center mb-4 titulo__seleccion">Ha seleccionado pagar con tarjeta!</h3>
       </div>
            <div class="row">
                <div class="col-6">
                    <div>
                        <h4>BANCO:</h4>
                        <h5>ICBC</h5>
                    </div>
                    <div>
                        <h4>CBU ALIAS:</h4>
                        <h5>EvoICBC</h5>
                    </div>
                    <div>
                        <h4>CBU:</h4>
                        <h5>00012345-1000000659956</h5>
                    </div>
                    <div>
                        <h4>CUENTA CORRIENTE:</h4>
                        <h5>3636-9 256-1</h5>
                    </div>
                    <div>
                        <h4>CUIT:</h4>
                        <h5>15-12345678-5</h5>
                    </div>
                </div>
                <div class="col-6">
                    <form id="formularioTarjeta">
                            <div class="mb-3 formulario__grupo">
                                <label for="numeroTarjeta" class="formulario__label">N° de Tarjeta</label>
                                <div class="formulario__grupo-input">
                                <input type="text"  id="numeroTarjeta"  class="formulario__input"placeholder="4546400034748181">
                                </div>
                            </div>
                        <div class="mb-3 formulario__grupo">
                            <label for="titularTarjeta" class="formulario__label">CUIT/CUIL del titular de la cuenta</label>
                            <div class="formulario__grupo-input">
                              <input type="text"  id="titularTarjeta" class="formulario__input" placeholder="2039830289">
                            </div>
                        </div>
                        <div class="mb-3 formulario__grupo">
                            <label for="nombreTitular" class="formulario__label">Nombre del titular de la cuenta</label>
                            <div class="formulario__grupo-input">
                            <input type="name" class="formulario__input" id="nombreTitular" placeholder="Juan Perez">
                            </div>
                        </div>
                        <div class="mb-3 formulario__grupo">
                            <label for="numeroTarjeta" class="formulario__label">Importe</label>
                            <div class="formulario__grupo-input">
                            <input type="text"  id="numeroTarjeta" class="formulario__input" placeholder="9834">
                            </div>
                        </div>
                        <div class="mb-3 formulario__grupo">
                            <label for="formFile" class="formulario__label">Ajuntar imagen de comprobante.</label>
                            <div class="formulario__grupo-input">
                            <input  type="file" class="formulario__input" id="formFile">
                            </div>
                        </div>
                        <div>
                            <input id="confirmarPago" type="submit" class="formulario__btn botonPago"></input>
                        </div>
                    </form>    
                </div>    
            </div>
            <div class="row m-4">
                <button  class="btn btn-danger" onclick="location.href='index.html'">Volver a Home</button>
            </div>

        </section>
       `
   )
   $("#formularioTarjeta").submit((e) => {
    e.preventDefault();
    let formulario = e.target;
    const enJSON = JSON.stringify(formulario);
    sessionStorage.setItem('procesoPago', enJSON);
    $(".containerTarjeta").remove();

    $(".mensajeContainer").append(`
    <div class="row d-flex justify-content-center">
        <h1 class="mensajeGracias">Gracias ${nombrePersona} por su compra de $${traerPrecio}!! </h1> 
        <h3>Ya procesamos su pago!</h3>
        <h4>En 48 horas recibira su paquete en 
        ${direccionPersona}.La factura le llegará a su email 
        ${emailPersona},si hay algun inconveniente se 
        lo comunicaremos a su numero 
        telefónico ${telefonoPersona}</h4>
        <button  class="btn btn-danger boton_home" onclick="location.href='index.html'">Volver a Home</button>
    </div>
    `)
  })
})

}
/* 
$("#confirmarPago").click(() => {
   
})
 */



   
