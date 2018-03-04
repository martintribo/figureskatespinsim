import './canvasmanager.mjs';

import Skater from './objects/skater.mjs';
import Rink from './objects/rink.mjs';

const rink = new Rink();
const skater = new Skater();

import { WIDTH, HEIGHT } from './objects/rink.mjs';
import { FWIDTH, FLENGTH } from './objects/skater.mjs';

const leanXTxt = document.querySelector('#leanx');

const interval = 33;

const canvas = document.querySelector('#rink-canvas');
const ctx = canvas.getContext('2d');
setInterval(function () {
    skater.tick(interval);
    if (skater.x < 0 || skater.x > WIDTH || skater.y < 0 || skater.y > HEIGHT) {
        skater.x = 400;
        skater.y = 300;
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    rink.render(ctx);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    skater.render(ctx);
    leanXTxt.innerHTML = skater.lean.x;
}, interval);

/*
States
    Body Angular Momentum
    Angular Velocity
    Skate forward/backward speed
    Lean (consider angle of skate now, weight/muscle tension should be considered later)
        Side
        Forward/Backward
    Blade radius at current vertical lean
    Skate Orientation
    Skate Position

State for frame
    Skate Forward/Backward Speed
        get value from last frame
        modified by lean
    Angular Velocity
        value from last frame
        + lean modifier
        +/- Restriction from 
    Skate Orientation
        Old Value
        + Angular Momentum Modifier
    Lean
        Old value
        + Arrow key modifier
        [] Restrain within limits
    Skate Position
        New Orientation * Forward/Backward Speed
    

    Future Ideas
        Lean is "steered" or biased by how body wants to balance in frame

    Two current thoughts of simulation
        One - Angular velocity + linear velocity
        Two - Angular Velocity + body mass momentum + linear velocity
*/
