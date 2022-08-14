const items = [
    {
        id: 1,
        marca: `CHEVROLET`,
        rodado: `R15`,
        cantidad: 10,
        precio: 30000,
        Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/2/_/2_3.jpg`,
    },
    {
        id: 2,
        marca: `RENAULT`,
        rodado: `R16`,
        cantidad: 22,
        precio: 45000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_603930-MLA31575601679_072019-O.webp`,
    },
    {
        id: 3,
        marca: `TOYOTA`,
        rodado: `R17`,
        cantidad: 21,
        precio: 63000,
        Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/c/o/corolla-dyn-lateral-ala_1_2.jpg`,
    },
    {
        id: 4,
        marca: `FORD`,
        rodado: `R15`,
        cantidad: 16,
        precio: 65000,
        Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/f/o/focus-titanium-latera-ala_1.jpg`
    },
    {
        id: 5,
        marca: `FIAT`,
        rodado: `R16`,
        cantidad: 3,
        precio: 35000,
        Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/f/i/fiat-cronos-lateral-ala_1.jpg`
    },
    {
        id: 6,
        marca: `AUDI`,
        rodado: `R16`,
        cantidad: 7,
        precio: 32400,
        Image: `./imagenes/llanta.jpg`
    },
    {
        id: 7,
        marca: `HYUNDAI`,
        rodado: `R16`,
        cantidad: 0,
        precio: 32400,
        Image: `https://www.selcus.com/662-thickbox_default/llanta-original-hyundai.jpg`
    },
    {
        id: 8,
        marca: `PEUGEOT`,
        rodado: `R17`,
        cantidad: 32,
        precio: 32400,
        Image: `https://http2.mlstatic.com/D_NQ_NP_729683-MLA32374766269_092019-O.webp`
    },
    {
        id: 9,
        marca: `DODGE`,
        rodado: `R20`,
        cantidad: 12,
        precio: 65400,
        Image: `https://m.media-amazon.com/images/I/510fsFpTunL._AC_SS450_.jpg`
    },
    {
        id: 10,
        marca: `DODGE`,
        rodado: `R18`,
        cantidad: 32,
        precio: 52400,
        Image: `https://m.media-amazon.com/images/I/510fsFpTunL._AC_SS450_.jpg`
    },
    {
        id: 11,
        marca: `MERCEDES`,
        rodado: `R15`,
        cantidad: 32,
        precio: 52400,
        Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/l/a/lateral2ala_69_1.jpg`
    },
    {
        id: 12,
        marca: `MERCEDES`,
        rodado: `R17`,
        cantidad: 12,
        precio: 72400,
        Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/l/a/lateral2ala_69_1.jpg`
    },
]

//import  {items} from "./arrayLLantas";
// const items = require('./arrayLLantas')
// console.log(items);
function shopSuccess(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'AGREGADO AL CARRITO',
        showConfirmButton: false,
        timer: 1500,
        customClass:{
            popup: `popUpSucces`
        }
      })
}


const showItems = (items) => {
    const itemsContainer = document.getElementById("itemsContainer");
    items.forEach((item) => {
        const div = document.createElement(`div`);
        div.classList.add(`.card`)
        div.innerHTML += ` <div class="cardConteiner">
                <div class="card">
                    <img src="${item.Image}" alt="">
                        <div class="cardInfo">
                        <h2>${item.marca}</h2>
                        <h3>Medida: ${item.rodado}</h3>
                        <p> ${item.cantidad} en stock </p>
                        <h4>$ ${item.precio}</h4>   
                        <button class="shop" onclick="carryItem(${item.id})" id="carryItemBtn${item.id}">AGREGAR</button>
                        <a href="index.html">ver mas</a>
                    </div>
                    </div>
                </div>
        `;
        itemsContainer.appendChild(div);
        
        const agregadoCarrito = document.getElementById(`carryItemBtn${item.id}`)
        agregadoCarrito.addEventListener(`click`, shopSuccess);
        
    });
}
showItems(items)
//carrito 
const shop = []

function carryItem (item) {
    const llanta = items.find(e => e.id === item)
    const flag = shop.findIndex(x => x.item.id === item)
    if (flag === -1) {
        shop.push({item: llanta, cant: 1})
    } else {
        shop[flag].cant = shop[flag].cant + 1
    }
    console.log(shop)
}



// const showShop = (shop) => {
//     const shopContainer = document.getElementById("shopContainer");
//     shop.forEach((e) => {
//         const div = document.createElement(`div`);
//         div.classList.add(`.card`)
//         div.innerHTML += ` <div class="cardConteiner">
//                 <div class="card">
//                         <div class="cardInfo">
//                         <h2>${e.marca}</h2>
//                         <h3>Medida: ${e.rodado}</h3>
//                         <p> ${e.cantidad} en stock </p>
//                         <h4>$ ${e.precio}</h4>   
//                         <button>X</button>
//                     </div>
//                     </div>
//                 </div>
//         `;
//         shopContainer.appendChild(div);
        
//         const agregadoCarrito = document.getElementById(`carryItemBtn`)
//         agregadoCarrito.addEventListener(`click`, shopSuccess);
        
//     });
// }