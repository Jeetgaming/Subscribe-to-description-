class Bob{
    constructor(x,y,r){

      var options = {
        isStatic: true,
        restitution:0.3,
        friction:0.5,
        density:1.2  }

      this.body = Matter.Bodies.circle(x, y, r,options);
      World.add(world, this.body);
     
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      ellipse(0, 0, this.width, this.height);
      pop();
      }
    }