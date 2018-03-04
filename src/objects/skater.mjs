const lxModifier = 0.1;
const lyModifier = 0.1;
const FWIDTH = 80;
const FLENGTH = 160;
const ROCKER_START = 0.8;

export default class {
    constructor() {
        this.x = 300;
        this.y = 150;
        this.velocity = 40;
        this.angVel = 0;
        this.lean = {
            x: 0,
            y: 0
        };
        this.orientation = Math.PI * 3 / 2;

        this.skateCanvas = document.querySelector('#skate-canvas');
        this.sctx = this.skateCanvas.getContext('2d');

        document.addEventListener('keydown', e => this.keydown(e));
    }

    tick(timeStep) {
        const ticksPerSecond = 1000 / timeStep;

        this.angVel = this.lean.x * Math.PI;

        const sAngVel = this.angVel / ticksPerSecond;
        this.orientation += sAngVel;
    
        const sVel = this.velocity / ticksPerSecond;
        this.x += Math.cos(this.orientation) * sVel;
        this.y += Math.sin(this.orientation) * sVel;
    }

    keydown(e) {
        if (e.keyCode === 37) {
            this.lean.x -= lxModifier;
        } else if (e.keyCode === 39) {
            this.lean.x += lxModifier;
        } else if (e.keyCode === 38) {
            this.lean.y += lyModifier;
        } else if (e.keyCode === 40) {
            this.lean.y -= lyModifier;
        }
    console.log(e.keyCode);
        this.lean.x = Math.min(this.lean.x, 1);
        this.lean.x = Math.max(this.lean.x, -1);
        this.lean.y = Math.min(this.lean.y, 1);
        this.lean.y = Math.max(this.lean.y, -1);
    }

    render(ctx) {
        ctx.translate(this.x, this.y);
        ctx.rotate(this.orientation);
    
        ctx.fillStyle = 'red';
        ctx.fillRect(-5, -5, 10, 10);

        this.renderSkateDiagram();
    }
    
    renderSkateDiagram() {
        const sctx = this.sctx;
        sctx.setTransform(1, 0, 0, 1, 0, 0);
        sctx.fillStyle = 'black';
        sctx.fillRect(0, 0, 80, 200);
    
        // TODO: Draw line for rocker starting point/range
    
        const rocker = FLENGTH - ROCKER_START * FLENGTH;
        sctx.fillStyle = 'green';
        sctx.fillRect(0, rocker - 2, FWIDTH, 4);
    
        sctx.fillStyle = 'lightgrey';
        sctx.fillRect(FWIDTH / 2 - 2, 0, 4, FLENGTH);
    
        sctx.translate(FWIDTH / 2, FLENGTH / 2);
        sctx.translate(this.lean.x * FWIDTH / 2, -this.lean.y * FLENGTH / 2);
    
        sctx.fillStyle = 'red';
        sctx.fillRect(-5, -5, 10, 10);
    
        // sctx.translate();
    }
}

export { FLENGTH, FWIDTH };