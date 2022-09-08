class ScrollingBackground {
    constructor(pImg) {
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.image = pImg;
    }

    update(dt) {
        this.x -= this.speed;
        if (this.x <= 0 - this.image.width) {
            this.x = 0;
        }
    }

    draw(pCtx) {
        pCtx.drawImage(this.image, this.x, this.y);
        pCtx.drawImage(this.image, this.x + this.image.width, this.y);
    }
}