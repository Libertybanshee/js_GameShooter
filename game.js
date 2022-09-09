let KeyRight = false;
let KeyLeft = false;
let KeyUp = false;
let KeyDown = false;

let imageLoader = new ImageLoader();
let gameReady = false;

let sceneJeu = new SceneJeu();

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function toucheEnfoncee(t) {
    t.preventDefault();
    if (t.code == "ArrowRight") {
        KeyRight = true;
    }
    if (t.code == "ArrowUp") {
        KeyUp = true;
    }
    if (t.code == "ArrowLeft") {
        KeyLeft = true;
    }
    if (t.code == "ArrowDown") {
        KeyDown = true;
    }
}

function toucheRelachee(t) {
    t.preventDefault();
    if (t.code == "ArrowRight") {
        KeyRight = false;
    }
    if (t.code == "ArrowUp") {
        KeyUp = false;
    }
    if (t.code == "ArrowLeft") {
        KeyLeft = false;
    }
    if (t.code == "ArrowDown") {
        KeyDown = false;
    }
}

function load() {
    document.addEventListener("keydown", toucheEnfoncee, false);
    document.addEventListener("keyup", toucheRelachee, false);

    imageLoader.add("images/background.png");

    imageLoader.start(startGame);
}

function startGame() {
    console.log("StartGame");

    lstSprites = [];

    sceneJeu.load(imageLoader);

    gameReady = true;
}

function update(dt) {
    if (!gameReady) {
        return;
    }
    // Suite quand le jeu est prêt
    sceneJeu.update(dt);
}

function draw(pCtx) {
    if (!gameReady) {
        let ratio = imageLoader.getLoadedRatio();
        pCtx.fillStyle = "rgb(255,255,255)";
        pCtx.fillRect(1, 1, 400, 100);
        pCtx.fillStyle = "rgb(0,255,0)";
        pCtx.fillRect(1, 1, 400 * ratio, 100);
        return;
    }

    sceneJeu.draw(pCtx);
}