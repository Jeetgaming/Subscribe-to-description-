class Rope{
    constructor(bodyA,bodyB){
        var option ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.Rope = Constraint.create(option);
        World.add(world,this.Rope);
    }
    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.Rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
 }