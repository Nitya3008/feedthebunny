class Link{
    constructor(bodyA,bodyB){
        var lastLink=bodyA.bodyA.bodies.length-2;
        this.link=Constraint.create(
            {
                bodyA:bodyA.bodyA.bodies[lastLink],
                pointA:{x:0,y:0},
                bodyB:bodyB,
                pointB:{x:0,y:0},
                length:-2,
                stiffness:0.01


            });
            World.add(engine.world,this.link);
    }

    detach(){
        World.remove(engine.world,this.link);
    }
}