class Ball {
constructor(x, y,radius) {
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }
this.body = Bodies.circle(x, y, (radius-20)/2, options);
this.radius = radius;
this.image = loadImage("paper.png");
// Matter.Body.setAngle(this.body,angle);
World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    fill("red")
    push ()
    translate(pos.x,pos.y);
    rotate(angle)

   imageMode(CENTER);
   image(this.image,0,0,this.radius,this.radius);
    pop ();
}
}
