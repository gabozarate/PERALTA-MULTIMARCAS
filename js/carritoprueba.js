
const items = [
    {
        id: 1,
        marca: `CHEVROLET`,
        info: `R15`,
        cantidad: 10,
        precio: 30000,
        Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/2/_/2_3.jpg`,
        categoria: `llanta`
    },
    {
        id: 2,
        marca: `RENAULT`,
        info: `R16`,
        cantidad: 22,
        precio: 45000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_603930-MLA31575601679_072019-O.webp`,
        categoria: `llanta`
    },
    // {
    //     id: 3,
    //     marca: `TOYOTA`,
    //     rodado: `R17`,
    //     cantidad: 21,
    //     precio: 63000,
    //     Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/c/o/corolla-dyn-lateral-ala_1_2.jpg`,
    //     categoria: `llanta`
    // },
    // {
    //     id: 4,
    //     marca: `FORD`,
    //     rodado: `R15`,
    //     cantidad: 16,
    //     precio: 65000,
    //     Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/f/o/focus-titanium-latera-ala_1.jpg`,
    //     categoria: `llanta`
    // },
    // {
    //     id: 5,
    //     marca: `FIAT`,
    //     rodado: `R16`,
    //     cantidad: 3,
    //     precio: 35000,
    //     Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/f/i/fiat-cronos-lateral-ala_1.jpg`,
    //     categoria: `llanta`
    // },
    // {
    //     id: 6,
    //     marca: `AUDI`,
    //     rodado: `R16`,
    //     cantidad: 7,
    //     precio: 32400,
    //     Image: `./imagenes/llanta.jpg`,
    //     categoria: `llanta`
    // },
    // {
    //     id: 7,
    //     marca: `HYUNDAI`,
    //     rodado: `R16`,
    //     cantidad: 0,
    //     precio: 32400,
    //     Image: `https://www.selcus.com/662-thickbox_default/llanta-original-hyundai.jpg`,
    //     categoria: `llanta`
    // },
    // {
    //     id: 8,
    //     marca: `PEUGEOT`,
    //     rodado: `R17`,
    //     cantidad: 32,
    //     precio: 32400,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_729683-MLA32374766269_092019-O.webp`,
    //     categoria: `llanta`
    // },
    // {
    //     id: 9,
    //     marca: `DODGE`,
    //     rodado: `R20`,
    //     cantidad: 12,
    //     precio: 65400,
    //     Image: `https://m.media-amazon.com/images/I/510fsFpTunL._AC_SS450_.jpg`,
    //     categoria: `llanta`
    // },
    // {
    //     id: 10,
    //     marca: `DODGE`,
    //     rodado: `R18`,
    //     cantidad: 32,
    //     precio: 52400,
    //     Image: `https://m.media-amazon.com/images/I/510fsFpTunL._AC_SS450_.jpg`,
    //     categoria: `llanta`,
    // },
    // {
    //     id: 11,
    //     marca: `MERCEDES`,
    //     rodado: `R15`,
    //     cantidad: 32,
    //     precio: 52400,
    //     Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/l/a/lateral2ala_69_1.jpg`,
    //     categoria: `llanta`
    // },
    // {
    //     id: 12,
    //     marca: `MERCEDES`,
    //     rodado: `R17`,
    //     cantidad: 12,
    //     precio: 72400,
    //     Image: `https://distri-llantas.com.ar/pub/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/l/a/lateral2ala_69_1.jpg`,
    //     categoria: `llanta`
    // },
    {
        id: `N1`,
        marca: `PIRELLI`,
        info: `R18`,
        medida: `235-45`,
        cantidad: 11,
        precio: 22400,
        Image: `https://ganeumaticos.com.ar/wp-content/uploads/2019/06/Cinturato-P7.jpg`,
        categoria: `neumaticos`
    },
    {
        id: `N2`,
        marca: `MICHELLIN`,
        info: `R19`,
        medida: `235-55`,
        cantidad: 14,
        precio: 25000,
        Image: `https://www.costco.com.mx/medias/sys_master/products/h22/h18/11085620641822.jpg`,
        categoria: `neumaticos`
    },
    // {
    //     id: `N3`,
    //     marca: `FATE-O`,
    //     rodado: `R15`,
    //     medida: `225-55`,
    //     cantidad: 12,
    //     precio: 32400,
    //     Image: `http://neumaticosbalanco.com.ar/images/productos/autos/fate/1.jpg`,
    //     categoria: `neumaticos`
    // },
    // {
    //     id: `N4`,
    //     marca: `FIRESTONE`,
    //     rodado: `R14`,
    //     medida: `225-55`,
    //     cantidad: 22,
    //     precio: 23500,
    //     Image: `https://neumaticosbalanco.com.ar/images/productos/camionetas/fate/3.jpg`,
    //     categoria: `neumaticos`
    // },
    // {
    //     id: `N5`,
    //     marca: `PIRELLI`,
    //     rodado: `R15`,
    //     medida: `195-60`,
    //     cantidad: 16,
    //     precio: 32200,
    //     Image: `https://www.llantasoriginales.com/prod_images/0000001125_1.jpg`,
    //     categoria: `neumaticos`
    // },
    // {
    //     id: `N6`,
    //     marca: `GOODYEAR`,
    //     rodado: `R15`,
    //     medida: `185-55`,
    //     cantidad: 8,
    //     precio: 30000,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_672052-MLA49635033961_042022-O.webp`,
    //     categoria: `neumaticos`
    // },
    // {
    //     id: `N7`,
    //     marca: `GOODYEAR`,
    //     rodado: `R13`,
    //     medida: `225-55`,
    //     cantidad: 1,
    //     precio: 22000,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_698771-MLA47266797460_082021-O.webp`,
    //     categoria: `neumaticos`
    // },
    // {
    //     id: `N8`,
    //     marca: `FIRESTONE`,
    //     rodado: `R16`,
    //     medida: `165-60`,
    //     cantidad: 17,
    //     precio: 32400,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_726840-MLA42562879613_072020-O.webp`,
    //     categoria: `neumaticos`
    // },
    // {
    //     id: `N9`,
    //     marca: `FIRESTONE`,
    //     rodado: `R14`,
    //     medida: `225-55`,
    //     cantidad: 22,
    //     precio: 23500,
    //     Image: `https://neumaticosbalanco.com.ar/images/productos/camionetas/fate/3.jpg`,
    //     categoria: `neumaticos`
    // },
    // {
    //     id: `N10`,
    //     marca: `PIRELLI`,
    //     rodado: `R15`,
    //     medida: `195-60`,
    //     cantidad: 16,
    //     precio: 32200,
    //     Image: `https://www.llantasoriginales.com/prod_images/0000001125_1.jpg`,
    //     categoria: `neumaticos`
    // },
    // {
    //     id: `N11`,
    //     marca: `GOODYEAR`,
    //     rodado: `R15`,
    //     medida: `185-55`,
    //     cantidad: 8,
    //     precio: 30000,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_672052-MLA49635033961_042022-O.webp`,
    //     categoria: `neumaticos`
    // },
    {
        id: `A1`,
        marca:  `PARABRISAS`,
        info:`CHEVROLET CORSA 2015`,
        cantidad: 10,
        precio: 30000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_849904-MLA43385740572_092020-O.jpg`,
        categoria: `accesorio`
    },
    {
        id: `A2`,
        marca: `PARAGOLPE`,
        info: `RENAULT CLIO 2015`,
        cantidad: 22,
        precio: 21000,
        Image: `https://d3ugyf2ht6aenh.cloudfront.net/stores/001/440/707/products/paragolpe-delantero-clio-03-061-23c63ee003cc96cd9f16198023936925-480-0.jpg`,
        categoria: `accesorio`
    },
    // {
    //     id: `A3`,
    //     accesorio: `PARAGOLPE`,
    //     modelo:`TOYOTA hilux 2013` ,
    //     cantidad: 21,
    //     precio: 33000,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_746953-MLA27221722134_042018-O.jpg`,
    //     categoria: `accesorio`
    // },
    // {
    //     id: `A4`,
    //     accesorio: `RETROVISOR`,
    //     modelo: `FORD fiesta 2020`,
    //     cantidad: 16,
    //     precio: 17000,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_669093-MLA50237340685_062022-O.webp`,
    //     categoria: `accesorio`
    // },
    // {
    //     id:`A5` ,
    //     accesorio: `LUNETA TRASERA`,
    //     modelo: `VOLKSWAGEN vento 2017`,
    //     cantidad: 13,
    //     precio: 35000,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_833709-MLA50531885452_062022-V.jpg`,
    //     categoria: `accesorio`
    // },
    // {
    //     id: `A6`,
    //     accesorio:  `PARAGOLPE`,
    //     modelo:`GOL POWER 2007`,
    //     cantidad: 7,
    //     precio: 16800,
    //     Image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRglYv7upbosK6mnMQJ99jdr6pIafg9_M3B7UN0l3HQJMOItzFREpXNSd_pQWboiuqKGw&usqp=CAU`,
    // },    
    // {
    //     id: `A7`,
    //     accesorio:  `ESPEJO INTERIOR`,
    //     modelo:`RENAULT MEGANE 2012`,
    //     cantidad: 10,
    //     precio: 6000,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_912215-MLA42676639840_072020-O.jpg`,
    // },
    // {
    //     id: `A8`,
    //     accesorio:  `OPTICA DELANTERA`,
    //     modelo:`CHEVROLET ONIX 2018`,
    //     cantidad: 8,
    //     precio: 24500,
    //     Image: `https://http2.mlstatic.com/D_863357-MLA27978711904_082018-V.jpg`,
    //     categoria: `accesorio`
    // },
    // {
    //     id: `A9`,
    //     accesorio:  `OPTICA DELANERTA`,
    //     modelo:`RANGER 2015`,
    //     cantidad: 12,
    //     precio: 28600,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_697934-MLA31794181451_082019-V.jpg`,
    //     categoria: `accesorio`
    // },
    // {
    //     id: `A10`,
    //     accesorio:  `JAULA ANTIVUELCO`,
    //     modelo:`FORD RANGER 2017`,
    //     cantidad: 5,
    //     precio: 45900,
    //     Image: `http://d2r9epyceweg5n.cloudfront.net/stores/190/572/products/d_987221-mla30085203469_042019-o-98c6276614df0f524a16448538849292-640-0.jpg`,
    //     categoria: `accesorio`
    // },
    // {
    //     id: `A11`,
    //     accesorio:  `PARAGOLPE`,
    //     modelo:`GOL TREND 2015`,
    //     cantidad: 10,
    //     precio: 30000,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_722609-MLA31015578231_062019-O.webp`,
    //     categoria: `accesorio`
    // },
    // {
    //     id: `A12`,
    //     accesorio:  `PARAGOLPE TRASERO`,
    //     modelo:`RENAULT DUSTER 2013`,
    //     cantidad: 11,
    //     precio: 35000,
    //     Image: `https://http2.mlstatic.com/D_NQ_NP_689820-MLA47174942922_082021-O.webp`,
    //     categoria: `accesorio`
    // },
]
const shop = []
localStorage.setItem("shop", shop)
let shopJ = JSON.stringify(shop)
localStorage.setItem("shopJ", shopJ)
console.log(shopJ)

if(localStorage.getItem("shop")){
    shop = JSON.parse(localStorage.getItem("shop"))
} else{
    shop.push(items)
    localStorage.setItem("shop", JSON.stringify(shop))
}

localStorage.setItem("items", items);
let itemsJ = JSON.stringify(items);
console.log(items)
localStorage.setItem("itemsJ", itemsJ)


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
                        <h3>${item.info}</h3>
                        <p> ${item.cantidad} en stock </p>
                        <h4>$ ${item.precio}</h4>   
                        <button class="shop" onclick="carryItem("${item.id}")" id="carryItemBtn${item.id}">AGREGAR</button>
                        <a href="cotizaciones.html">ver mas</a> 
                    </div>
                    </div>
                </div>
        `;
        itemsContainer.appendChild(div);
        
    });
}
showItems(items)

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

const showShop = (shop) => {
    const shopContainer = document.getElementById(`shopContainer`);
    shop.forEach((itemS) =>{
        const div = document.createElement(`div`);
        div.classList.add(`.card`)
        div.innerHTML += ` 
                       <div class="cardConteiner">
                <div class="card">
                    <img src="${itemS.Image}" alt="">
                        <div class="cardInfo">
                        <h2>${itemS.marca}</h2>
                        <h3>${itemS.info}</h3>
                        <p> ${itemS.cantidad} en stock </p>
                        <h4>$ ${itemS.precio}</h4>   
                        <button class="shop" id="carryItemBtn${itemS.id}">AGREGAR</button>
                    </div>
                    </div>
                </div> `;
                        
        shopContainer.appendChild(div);
    })

}
showShop(shop)

