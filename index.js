class Carousel {
    constructor(window, options = {}) {
        this.window = window;
        this.$target = options.$target;
        this.images = options.images || [];

        if (!(options.$target instanceof window.HTMLElement)) {
            throw new Error('Target need to be a DOM Element [HTMLElement]');
        }

        this.activeIndex = 0;

        this.renderImage = this.renderImage.bind(this);
        this.render = this.render.bind(this);

        return this;
    }

    renderImage(imgSrc) {
        const img = this.window.document.createElement('img');
        img.src = imgSrc;
        return img;
    }

    render() {
        this.images.map((image) => {
            const imgEl = this.renderImage(image);
            this.$target.appendChild(imgEl);
        });
    }
}

module.exports = Carousel;
