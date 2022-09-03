let img;
let imgG;
let timer;

let KeyUp = false;
let KeyRight = false;
let KeyDown = false;
let KeyLeft = false;

function toucheEnfoncee(t) {
    t.preventDefault();
    if (t.code == "KeyW") {
        KeyUp = true;
    }

    if (t.code == "KeyD") {
        KeyRight = true;
    }
    
    if (t.code == "KeyS") {
        KeyDown = true;
    }
    
    if (t.code == "KeyA") {
        KeyLeft = true;
    }
}

function toucheRelachee(t) {
    t.preventDefault();
    if (t.code == "KeyW") {
        KeyUp = false;
    }

    if (t.code == "KeyD") {
        KeyRight = false;
    }
    
    if (t.code == "KeyS") {
        KeyDown = false;
    }
    
    if (t.code == "KeyA") {
        KeyLeft = false;
    }
    
}

function load() {
    document.addEventListener("keydown", toucheEnfoncee, false);
    document.addEventListener("keyup", toucheRelachee, false);

    img = new Sprite("img/Hero/Hero1.png", 100, 100);
    imgG = new Sprite("img/ennemiGreen/green1.png", 300, 300);

    timer = 0;
}

function update(dt) {
    timer += dt;
    if (timer >= 1) {
        imgG.x++;
        timer = 0;
    }

    if (KeyUp) {
        img.y -= 10;
    }

    if (KeyRight) {
        img.x += 10;
    }

    if (KeyDown) {
        img.y += 10;
    }

    if (KeyLeft) {
        img.x -= 10;
    }
}

function draw(pCtx) {
    imgG.draw(pCtx)
    img.draw(pCtx);
}