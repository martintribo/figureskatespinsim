const WIDTH = 600;
const HEIGHT = 300;

export default class {
    constructor() {

    }

    render(ctx) {
        ctx.fillStyle = 'lightblue';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }
}

export { WIDTH, HEIGHT };
