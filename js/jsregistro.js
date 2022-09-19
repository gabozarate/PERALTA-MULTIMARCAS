function verProductosBtn() {
    window.open(`productos.html`)
}

function norteA() {
    Swal.fire({
        title: 'EL COSTO DEL ENVIO ES',
        text: `$1.200 POR UNIDAD`,
        background: `#AEFEFF`,
        showCancelButton: true,
        confirmButtonColor: '#35858B',
        cancelButtonColor: '#4FBDBA',
        cancelButtonText: `VER MAS ENVIOS`,
        confirmButtonText: 'VER PRODUCTOS',
        timer: `5000`,
        timerProgressBar: `true`,
        customClass:{
            title: `titleAlert`,
            text:`textAlert`}
    }).then((result) => {
        if (result.isConfirmed) {
            verProductosBtn();
        }
    })

}

const btnNorteA = document.getElementById(`norteA`)
btnNorteA.addEventListener(`click`, norteA);

function norteB() {
    Swal.fire({
        title: 'EL COSTO DEL ENVIO ES',
        text: `$1.600 POR UNIDAD`,
        background: `#AEFEFF`,
        showCancelButton: true,
        confirmButtonColor: '#35858B',
        cancelButtonColor: '#4FBDBA',
        cancelButtonText: `VER MAS ENVIOS`,
        confirmButtonText: 'VER PRODUCTOS',
        timer: `5000`,
        timerProgressBar: `true`,
        customClass:{
            title: `titleAlert`,
            text:`textAlert`}
    }).then((result) => {
        if (result.isConfirmed) {
            verProductosBtn();
        }
    })

}

const btnNorteB = document.getElementById(`norteB`)
btnNorteB.addEventListener(`click`, norteB);

function litoral() {
    Swal.fire({
        title: 'EL COSTO DEL ENVIO ES',
        text: `$1.500 POR UNIDAD`,
        background: `#AEFEFF`,
        showCancelButton: true,
        confirmButtonColor: '#35858B',
        cancelButtonColor: '#4FBDBA',
        cancelButtonText: `VER MAS ENVIOS`,
        confirmButtonText: 'VER PRODUCTOS',
        timer: `5000`,
        timerProgressBar: `true`,
        customClass:{
            title: `titleAlert`,
            text:`textAlert`}
    }).then((result) => {
        if (result.isConfirmed) {
            verProductosBtn();
        }
    })

}

const btnLitoral = document.getElementById(`litoral`)
btnLitoral.addEventListener(`click`, litoral);

function cuyo() {
    Swal.fire({
        title: 'EL COSTO DEL ENVIO ES',
        text: `$1.000 POR UNIDAD`,
        background: `#AEFEFF`,
        showCancelButton: true,
        confirmButtonColor: '#35858B',
        cancelButtonColor: '#4FBDBA',
        cancelButtonText: `VER MAS ENVIOS`,
        confirmButtonText: 'VER PRODUCTOS',
        timer: `5000`,
        timerProgressBar: `true`,
        customClass:{
            title: `titleAlert`,
            text:`textAlert`}
    }).then((result) => {
        if (result.isConfirmed) {
            verProductosBtn();
        }
    })

}

const btnCuyo = document.getElementById(`cuyo`)
btnCuyo.addEventListener(`click`, cuyo);

function bsas() {
    Swal.fire({
        title: 'EL COSTO DEL ENVIO ES',
        text: `$1.200 POR UNIDAD`,
        background: `#AEFEFF`,
        showCancelButton: true,
        confirmButtonColor: '#35858B',
        cancelButtonColor: '#4FBDBA',
        cancelButtonText: `VER MAS ENVIOS`,
        confirmButtonText: 'VER PRODUCTOS',
        timer: `5000`,
        timerProgressBar: `true`,
        customClass:{
            title: `titleAlert`,
            text:`textAlert`}
    }).then((result) => {
        if (result.isConfirmed) {
            verProductosBtn();
        }
    })

}

const btnBsas = document.getElementById(`bsas`)
btnBsas.addEventListener(`click`, bsas);

function centro() {
    Swal.fire({
        title: 'EL COSTO DEL ENVIO ES',
        text: `$1.100 POR UNIDAD`,
        background: `#AEFEFF`,
        showCancelButton: true,
        confirmButtonColor: '#35858B',
        cancelButtonColor: '#4FBDBA',
        cancelButtonText: `VER MAS ENVIOS`,
        confirmButtonText: 'VER PRODUCTOS',
        timer: `5000`,
        timerProgressBar: `true`,
        customClass:{
            title: `titleAlert`,
            text:`textAlert`}
    }).then((result) => {
        if (result.isConfirmed) {
            verProductosBtn();
        }
    })

}

const btnCentro = document.getElementById(`centro`)
btnCentro.addEventListener(`click`, centro);

function patagonia() {
    Swal.fire({
        title: 'EL COSTO DEL ENVIO ES',
        text: `$1.200 POR UNIDAD`,
        background: `#AEFEFF`,
        showCancelButton: true,
        confirmButtonColor: '#35858B',
        cancelButtonColor: '#4FBDBA',
        cancelButtonText: `VER MAS ENVIOS`,
        confirmButtonText: 'VER PRODUCTOS',
        timer: `5000`,
        timerProgressBar: `true`,
        customClass:{
            title: `titleAlert`,
            text:`textAlert`}
    }).then((result) => {
        if (result.isConfirmed) {
            verProductosBtn();
        }
    })

}

const btnPata = document.getElementById(`patagonia`)
btnPata.addEventListener(`click`, patagonia);
