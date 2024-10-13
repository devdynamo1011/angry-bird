import { Bodies, World } from 'matter-js'

function PigCastle(world) {
    const wood_h = './wood-h.png';
    const wood_v = './wood-v.png';
    const wood_b = './wood-b.png';
    const pig = './pig.png';
    const pigRadius = 25;

    const createBlock = (x,y,width,height,texture,xScale,yScale) => {
        return Bodies.rectangle(x,y,width,height,{
            isStatic:false,
            density: 0.04,
            restitution: 0.8,
            friction: 0.5,
            render: {
                sprite:{
                    texture:texture,
                    xScale: xScale,
                    yScale: yScale
                }
            }
        });
    }

    const createPig = (x,y,radius) => {
        return Bodies.circle(x,y,radius,{
            isStatic:false,
            density: 0.04,
            restitution: 0.8,
            friction: 0.5,
            render: {
                sprite:{
                    texture:pig,
                    xScale: 0.1,
                    yScale: 0.1
                }
            }
        });
    }
    const blocks = [
        createBlock(1000, window.innerHeight - 160, 200, 20, wood_h, 0.24, 0.2),
        createBlock(1210, window.innerHeight - 160, 200, 20, wood_h, 0.24, 0.2),
        createBlock(1000, window.innerHeight - 270, 20, 200, wood_v, 0.2, 0.24),
        createBlock(1210, window.innerHeight - 270, 20, 200, wood_v, 0.2, 0.24),
        createBlock(1105, window.innerHeight - 380, 300, 20, wood_h, 0.3, 0.2),
        createBlock(1050, window.innerHeight - 440, 20, 100, wood_v, 0.2, 0.12),
        createBlock(1150, window.innerHeight - 440, 20, 100, wood_v, 0.2, 0.12),
        createBlock(1100, window.innerHeight - 500, 200, 20, wood_h, 0.2, 0.2),
        createBlock(1050, window.innerHeight - 195, 50, 50, wood_b, 0.16, 0.16),
        createBlock(1150, window.innerHeight - 195, 50, 50, wood_b, 0.16, 0.16),
        createBlock(1100, window.innerHeight - 230, 100, 20, wood_h, 0.15, 0.2),
    ];
    const pigs = [
        createPig(1100, window.innerHeight - 265, pigRadius),
        createPig(1100, window.innerHeight - 425, pigRadius),
        createPig(1100, window.innerHeight - 540, pigRadius),
    ]

    World.add(world, pigs);
    World.add(world,blocks);
}

export default PigCastle