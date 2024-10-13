import React, { useEffect, useRef } from 'react'
import { Engine, Render, Runner, World, Mouse, MouseConstraint, Events } from 'matter-js';
import Ground from './Ground';
import Bird from './Bird';
import SlingShot from './SlingShot';
import PigCastle from './PigCastle';

function Main() {
    const sceneRef = useRef(null);
    useEffect(()=>{
        const engine = Engine.create();
        const runner = Runner.create();
        const world = engine.world;
        const render = Render.create({
            element: sceneRef.current,
            engine:engine,
            options:{
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background:'transparent'
            }
        });
        Render.run(render);
        Runner.run(runner,engine);
        const groundTexture = './ground.jpg';
        const birdTexture = './bird.png';
        Ground(world,window.innerWidth,window.innerHeight,groundTexture);
        let bird = Bird(world,200,500,25,birdTexture);
        let slingShot = SlingShot(world,bird,200,500);
        PigCastle(world);
        let mouse = Mouse.create(render.canvas);
        let mouseConstraint = MouseConstraint.create(engine,{
            mouse: mouse,
            constraint:{
                stiffness:0.05,
                render: {
                    visible: false,
                }
            }
        });
        World.add(world, mouseConstraint);

        Events.on(mouseConstraint,'mouseup',()=>{
            setTimeout(()=>{
                slingShot.bodyB = null;
            },50);
        });
        return ()=>{
            Render.stop(render);
            Runner.stop(runner);
            Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        }
    },[]);
    return (
        <div style={{overflow:'hidden',margin:0,backgroundImage:'url("sky.png")',backgroundSize:'contain'}}>
            <div ref={sceneRef}></div>
        </div>
    )
}

export default Main