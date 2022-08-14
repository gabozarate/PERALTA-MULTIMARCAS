
const neumaticos = [
    {
        id: `N1`,
        marca: `PIRELLI`,
        rodado: `R18`,
        medida: `235-45`,
        cantidad: 11,
        precio: 22400,
        Image: `https://ganeumaticos.com.ar/wp-content/uploads/2019/06/Cinturato-P7.jpg`
    },
    {
        id: `N2`,
        marca: `MICHELLIN`,
        rodado: `R19`,
        medida: `235-55`,
        cantidad: 14,
        precio: 25000,
        Image: `https://www.costco.com.mx/medias/sys_master/products/h22/h18/11085620641822.jpg`
    },
    {
        id: `N3`,
        marca: `FATE-O`,
        rodado: `R15`,
        medida: `225-55`,
        cantidad: 12,
        precio: 32400,
        Image: `http://neumaticosbalanco.com.ar/images/productos/autos/fate/1.jpg`
    },
    {
        id: `N4`,
        marca: `FIRESTONE`,
        rodado: `R14`,
        medida: `225-55`,
        cantidad: 22,
        precio: 23500,
        Image: `https://neumaticosbalanco.com.ar/images/productos/camionetas/fate/3.jpg`
    },
    {
        id: `N5`,
        marca: `PIRELLI`,
        rodado: `R15`,
        medida: `195-60`,
        cantidad: 16,
        precio: 32200,
        Image: `https://www.llantasoriginales.com/prod_images/0000001125_1.jpg`
    },
    {
        id: `N6`,
        marca: `GOODYEAR`,
        rodado: `R15`,
        medida: `185-55`,
        cantidad: 8,
        precio: 30000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_672052-MLA49635033961_042022-O.webp`
    },
    {
        id: `N7`,
        marca: `GOOYEAR`,
        rodado: `R13`,
        medida: `225-55`,
        cantidad: 1,
        precio: 22000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_698771-MLA47266797460_082021-O.webp`
    },
    {
        id: `N8`,
        marca: `FIRESTONE`,
        rodado: `R16`,
        medida: `165-60`,
        cantidad: 17,
        precio: 32400,
        Image: `https://http2.mlstatic.com/D_NQ_NP_726840-MLA42562879613_072020-O.webp`
    },
    {
        id: `N9`,
        marca: `FIRESTONE`,
        rodado: `R14`,
        medida: `225-55`,
        cantidad: 22,
        precio: 23500,
        Image: `https://neumaticosbalanco.com.ar/images/productos/camionetas/fate/3.jpg`
    },
    {
        id: `N10`,
        marca: `PIRELLI`,
        rodado: `R15`,
        medida: `195-60`,
        cantidad: 16,
        precio: 32200,
        Image: `https://www.llantasoriginales.com/prod_images/0000001125_1.jpg`
    },
    {
        id: `N11`,
        marca: `GOODYEAR`,
        rodado: `R15`,
        medida: `185-55`,
        cantidad: 8,
        precio: 30000,
        Image: `https://http2.mlstatic.com/D_NQ_NP_672052-MLA49635033961_042022-O.webp`
    },

]


// import {neumaticos} from "./arrayNeumaticos.js";
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

    function showItemsNeu(neumaticos) {

        const itemsContainer = document.getElementById("itemsContainer");
        neumaticos.forEach((neu) => {
            const div = document.createElement(`div`);
            div.classList.add(`.card`);
            div.innerHTML += ` <div class="cardConteiner">
                <div class="card">
                    <img src="${neu.Image}" alt="">
                        <div class="cardInfo">
                        <h2>${neu.marca}</h2>
                        <h3>Medida: ${neu.medida}</h3>
                        <h3>${neu.rodado}</h3>
                        <p> ${neu.cantidad} en stock </p>
                        <h4>$ ${neu.precio}</h4>  
                        <button class="shop" onclick="carryItem('${neu.id}')" >AGREGAR</button>
                        <a href="index.html">ver mas</a>   
                    </div>
                    </div>
                </div>
        `;
            itemsContainer.appendChild(div);            
        });
    }
    
    showItemsNeu(neumaticos)

    const shop = []

    function carryItem (neu) {
        shopSuccess();
        const neumatico = neumaticos.find(e => e.id === neu)
        const flag = shop.findIndex(x => x.item.id === neu)
        if (flag === -1) {
            shop.push({item: neumatico, cant: 1})
        } else {
            shop[flag].cant = shop[flag].cant + 1
        }
        console.log(shop)

    
    }

