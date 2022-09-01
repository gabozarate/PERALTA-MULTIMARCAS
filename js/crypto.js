divProductos = document.getElementById("containerMonedas")

fetch("https://api.nomics.com/v1/currencies/ticker?key=e994f1523d39b1d9e327affbbc77e45209b08a0e&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=")
  .then(response => response.json())
  .then((data) => {
    for (let moneda of data) {
        console.log(moneda.name)
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML = `<div id="" class="card" style ="width: 30%">
        <img class="card-img-top alturaCardFotos" src="${moneda.logo_url}">
  
                                    <div class="card-body">
                                        <h2 class="card-title">${moneda.name}</h2>
                                        <h2 class="card-title">${moneda.symbol}</h2>
                                        <h5 class="card-title">Precio actual: ${moneda.price}</h5>
                                        <h5 class="card-title">
                                        Ranking: ${moneda.rank}</h5>
                                        <h5 class="card-title">
                                        Ultima actualizacion: ${moneda.rank}</h5>
                                    </div>
                                </div>`
        divProductos.appendChild(nuevoProducto)
    }
})