const jsdom = require('jsdom');
const it = require('ava');
const {
    JSDOM
} = jsdom;

const Carousel = require('../index');

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

it('should throw when specified target isnt supplied', (t) => {
    t.throws(() => {
        const c = new Carousel(dom.window, {});
    });
});

// it('should throw when specified target isnt a DOM node', (t) => {
//     t.throws(() => {
//         const c = new Carousel({ $target: 'abc' });
//     });
// });

it('should store image list in its state', (t) => {
    const container = dom.window.document.createElement('div');

    const c = new Carousel(dom.window, {
        $target: container,
        images: ['abc1', 'def2'],
    });

    t.deepEqual(c.images, ['abc1', 'def2']);
});

it('should store current image index', (t) => {
    const container = dom.window.document.createElement('div');

    const c = new Carousel(dom.window, {
        $target: container,
        images: ['abc1', 'def2'],
    });

    t.is(c.activeIndex, 0);
});

it('should have render function', (t) => {
    const container = dom.window.document.createElement('div');

    const c = new Carousel(dom.window, {
        $target: container,
        images: ['abc1', 'def2'],
    });

    t.is(typeof c.render, 'function');
});

it('should render first image', (t) => {
    const container = dom.window.document.createElement('div');

    const c = new Carousel(dom.window, {
        $target: container,
        images: ['http://abc1/a', 'http://def2/b'],
    });

    c.render();

    const firstImg = container.querySelector('img');
    t.is(firstImg.src, 'http://abc1/a');
});
