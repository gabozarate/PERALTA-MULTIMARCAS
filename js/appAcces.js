const accesorios = [
    {
        id: `A1`,
        accesorio:  `PARABRISAS`,
        modelo:`CHEVROLET CORSA 2015`,
        cantidad: 10,
        precio: 30000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_849904-MLA43385740572_092020-O.jpg`,
    },
    {
        id: `A2`,
        accesorio: `PARAGOLPE`,
        modelo: `RENAULT CLIO 2015`,
        cantidad: 22,
        precio: 21000,
        Image: `https://d3ugyf2ht6aenh.cloudfront.net/stores/001/440/707/products/paragolpe-delantero-clio-03-061-23c63ee003cc96cd9f16198023936925-480-0.jpg`,
    },
    {
        id: `A3`,
        accesorio: `PARAGOLPE`,
        modelo:`TOYOTA hilux 2013` ,
        cantidad: 21,
        precio: 33000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_746953-MLA27221722134_042018-O.jpg`,
    },
    {
        id: `A4`,
        accesorio: `RETROVISOR`,
        modelo: `FORD fiesta 2020`,
        cantidad: 16,
        precio: 17000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_669093-MLA50237340685_062022-O.webp`
    },
    {
        id:`A5` ,
        accesorio: `LUNETA TRASERA`,
        modelo: `VOLKSWAGEN vento 2017`,
        cantidad: 13,
        precio: 35000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_833709-MLA50531885452_062022-V.jpg`
    },
    {
        id: `A6`,
        accesorio:  `PARAGOLPE`,
        modelo:`GOL POWER 2007`,
        cantidad: 7,
        precio: 16800,
        Image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRglYv7upbosK6mnMQJ99jdr6pIafg9_M3B7UN0l3HQJMOItzFREpXNSd_pQWboiuqKGw&usqp=CAU`,
    },    
    {
        id: `A7`,
        accesorio:  `ESPEJO INTERIOR`,
        modelo:`RENAULT MEGANE 2012`,
        cantidad: 10,
        precio: 6000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_912215-MLA42676639840_072020-O.jpg`,
    },
    {
        id: `A8`,
        accesorio:  `OPTICA DELANTERA`,
        modelo:`CHEVROLET ONIX 2018`,
        cantidad: 8,
        precio: 24500,
        Image: `https://http2.mlstatic.com/D_863357-MLA27978711904_082018-V.jpg`,
    },
    {
        id: `A9`,
        accesorio:  `OPTICA DELANERTA`,
        modelo:`RANGER 2015`,
        cantidad: 12,
        precio: 28600,
        Image: `https://http2.mlstatic.com/D_NQ_NP_697934-MLA31794181451_082019-V.jpg`,
    },
    {
        id: `A10`,
        accesorio:  `JAULA ANTIVUELCO`,
        modelo:`FORD RANGER 2017`,
        cantidad: 5,
        precio: 45900,
        Image: `http://d2r9epyceweg5n.cloudfront.net/stores/190/572/products/d_987221-mla30085203469_042019-o-98c6276614df0f524a16448538849292-640-0.jpg`,
    },
    {
        id: `A11`,
        accesorio:  `PARAGOLPE`,
        modelo:`GOL TREND 2015`,
        cantidad: 10,
        precio: 30000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_722609-MLA31015578231_062019-O.webp`,
    },
    {
        id: `A12`,
        accesorio:  `PARAGOLPE TRASERO`,
        modelo:`RENAULT DUSTER 2013`,
        cantidad: 11,
        precio: 35000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_689820-MLA47174942922_082021-O.webp`,
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

const showItems = (acccesorios) => {
    const itemsContainer = document.getElementById("itemsContainer");
    acccesorios.forEach((acc) => {
        const div = document.createElement(`div`);
        div.classList.add(`.card`)
        div.innerHTML += ` <div class="cardConteiner">
                <div class="card">
                    <img src="${acc.Image}" alt="">
                        <div class="cardInfo">
                        <h2>${acc.accesorio}</h2>
                        <h3>${acc.modelo}</h3>
                        <p> ${acc.cantidad} unidades en stock </p>
                        <h4>$ ${acc.precio}</h4>   
                        <button class="shop" onclick="carryItem('${acc.id}')"  id="carryItemBtn">AGREGAR</button>
                        <a href="index.html">ver mas</a>
                    </div>
                    </div>
                </div>
        `;
        itemsContainer.appendChild(div);
        
        // const agregadoCarrito = document.getElementById(`carryItemBtn${acc.id}`)
        // agregadoCarrito.addEventListener(`click`, shopSuccess);
        
    });
}
showItems(accesorios)
//carrito 
const shop = []

function carryItem (acc) {
    shopSuccess();
    const accesorio = accesorios.find(e => e.id === acc)
    const flag = shop.findIndex(x => x.item.id === acc)
    if (flag === -1) {
        shop.push({item: accesorio, cant: 1})
    } else {
        shop[flag].cant = shop[flag].cant + 1
    }
    console.log(shop)
}




