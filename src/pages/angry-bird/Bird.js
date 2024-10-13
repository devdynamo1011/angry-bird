import { Bodies, World } from 'matter-js'

function Bird(world,x,y,radius,birdTexture) {
    const bird = Bodies.circle(x, y, radius, {
        isStatic: false,
        density: 0.04,
        restitution: 0.8,
        fricton: 0.5,
        render:{
            sprite:{
                texture:birdTexture,
                xScale: radius/250,
                yScale: radius/250
            }
        }
    })
    World.add(world, bird);
    return bird;
}

export default Bird