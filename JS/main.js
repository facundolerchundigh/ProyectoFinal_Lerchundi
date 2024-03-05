
/* ENTRADA DE USUARIO */
let guardado = localStorage.getItem('usuario')
let datosUsuario = (JSON.parse(guardado));

$("#open").click( () =>{
  window.open("formEntrada.html","","")
  $("#open").hide();
$(".container-carrito").prepend(`<h5 class="saludoHeader">Bienvenido ${datosUsuario[0]}!</h5>
<button id="close" >
                    Cerrar sesion
                  </button>`); 
                  $("#close").click(() => {
                    window.location.reload()
                  }) 
})



/* CARRITO */

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const botonComprar = document.querySelector('.botonComprar');

botonComprar.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const card = button.closest('.card');

  const cardTitle = card.querySelector('.card-title').textContent;
  const cardPrice = card.querySelector('.card-price').textContent;
  const cardImage = card.querySelector('.card-img-top').src;

  addItemToShoppingCart(cardTitle, cardPrice, cardImage);
}

function addItemToShoppingCart(cardTitle, cardPrice, cardImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === cardTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('section');
  const shoppingCartContent = `
    <div class="container">
      <div class="row shoppingCartItem">
          <div class="col-6">
              <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${cardImage} class="shopping-cart-image">
                  <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${cardTitle}</h6>
              </div>
          </div>
          <div class="col-2">
              <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="item-price mb-0 shoppingCartItemPrice">${cardPrice}</p>
              </div>
          </div>
          <div class="col-4">
              <div
                  class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                      value="1">
                  <button class="btn btn-danger buttonDelete" type="button">X</button>
              </div>
          </div>
      </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total  = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
  $(".comprarButton").click(() =>{
    window.open("compra.html","_self")
  })

  const guardarPrecio = total;
  sessionStorage.setItem('precioTotal', guardarPrecio);
}





function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}





/* FORMULARIO */

$(`#Formulario`).submit((e) => {
    e.preventDefault();
    
    let formulario = e.target;
    
    let nombrePersona = formulario.children[0].value;
    let emailPersona = formulario.children[1].value;
    let mensajePersona = formulario.children[2].value;
  
    console.log("Nombre: " + nombrePersona );
    console.log("Email: " + emailPersona);
    console.log("Su mensaje: " + mensajePersona);
  })



/* BOTON DE VOLVER AL HOME */

$('body').append(`
<div class="container">
<div class="row flechaHome">
<a href="#header"><img src="../images/flecha.png"
                    alt="boton para regresar al home" class="fixedIcon"></a>
    </ul>
</div>
</div>`)

$(".fixedIcon").css({ 
  "width": "40px",
  "background-color": "white",
  "padding" : "10px",
  "height": "40px",
  "border-radius": "70px",
    });

    $(".flechaHome").css({ 
      "position": "fixed",
      "right": "0",
      "top": "85%",
        });


/* ANIMACIONES y ESTILOS DE LA PAG */

$(".formularioitems").click ( () =>{
  $(".formularioitems").css({
    "background-color":"black",
    "color":"white"
  })
})


  $(".card").mousemove( () => { 
    $(".nombreDelProducto").css(
      "color", "#9fe3da")
    $(".card-body").css(
      "background-color", "black")
    $(".card-text, .card-price").css(
      "color", "white")
});



 $(".footerIcons").click( () =>{
  $(".footerIcons").fadeOut(3000)
  .delay(1000)
  .fadeIn(2000)
 })


$(".botonComprar").click( () =>{ 
    $(".botonComprar").css({
    "background-color": "rgb(255, 255, 255)",
    "color": "#000000",
    "font-weight": "800",
    "text-decoration": "none"
    })
   });

  $(".esloganMarca").css(
    "color", "black")

  $(".containerCarrito").css({
    "border": "black 5px double",
    "padding": "25px"
  })


/* INCORPORANDO API DEL CLIMA */

const URL = "http://api.weatherapi.com/v1/current.json?key=f1dcb7ef2a5344e18f4132300212311&q=buenos aires&aqi=no"

      $().ready(() =>
      $.get(URL, (response, status) => {
        if (status == 'success') {
            const articulo = response.location

            const nombre = articulo.name
            const tiempo = response.current
            const temp = tiempo.temp_c

            const condicion = response.current.condition
            const img = condicion.icon
            
            $(".apiClima").prepend(`
            <div class="clima d-flex flex-row align-items-center justify-content-between">
                    <img src="${img}" class="imgWeather" alt="">
                    <h2 class="temp">${temp}°C en ${nombre}</h2>
            </div>
                    `)

        $(".imgWeather").css(
        { 
            "width": "80px",
            "heigh" : "90px"
        })
        $(".temp").css({
            "font-size": "20px",
            "font-weigth":"600"
        })    
        }
      })
      )  

