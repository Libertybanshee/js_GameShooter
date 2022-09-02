let img;
let imgG;
let x = 0;
let y = 0;

let derniereUpdate = Date.now()

function load() {
    img = new Sprite("img/Hero/Hero1.png", 100, 100);
    imgG = new Sprite("img/ennemiGreen/green1.png", 300, 300);
}

function update() {
    img.x;
}

function draw(pCtx) {
    imgG.draw(pCtx)
    img.draw(pCtx);
}