let cmimiNr = -1;
let cmimiIri;

function ndryshoSasiIncrease() {
    let stock = document.getElementById('stock');
    let stockNr = stock.innerHTML.split(":");
    let stockNumber = parseInt(stockNr[1]);
    let sasia = document.getElementById('sasi');
    let cmimi = document.getElementById('price');

    if (cmimiNr == -1) {
        cmimiNr = parseInt(cmimi.innerHTML);
    }

    let nr = parseInt(sasia.innerHTML);

    if (stockNumber > 0) {
        nr++;
        stockNumber--;
        cmimiIri = cmimiNr * nr;
        stock.innerHTML = `Available Stock: ${stockNumber}`;
        sasia.innerHTML = nr;
        cmimi.innerHTML = cmimiIri;
    }
}

function ndryshoSasiDecrease() {

    let stock = document.getElementById('stock');
    let stockNr = stock.innerHTML.split(":");
    let stockNumber = parseInt(stockNr[1]);
    let sasia = document.getElementById('sasi');
    let cmimi = document.getElementById('price');
    let nr = parseInt(sasia.innerHTML);

    if (nr > 1) {
        nr--;
        sasia.innerHTML = nr;
        stockNumber++;
        cmimiIri = cmimiIri - cmimiNr;
        cmimi.innerHTML = cmimiIri;
        stock.innerHTML = `Available Stock: ${stockNumber}`;
    }
}

function addToBag1() {
    let sizes = document.getElementsByName('size');

    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            return true;
        }
    }
    return false;
}

function addToBag2() {
    let colors = document.getElementsByName('color');

    for (let i = 0; i < colors.length; i++) {
        if (colors[i].checked) {
            return true;
        }
    }
    return false;
}

function openwind() {
    if (addToBag1() && addToBag2()) {
        window.open("../product-webpages/add_to_bag.html");
    }
    else if (!addToBag2()) {
        alert("Please select the color");
    }
    else if (!addToBag1()) {
        alert("Please select the size");
    }
}