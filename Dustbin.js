class Dustbin {
constructor(x, y,width,height) {
var options = {
isStatic:true,
restitution:0.3,
friction:0.5, 
density:1.2
}
this.body = Bodies.rectangle(x, y,width, height, options);
this.width = width;
this.height = height;
this.image = loadImage("dustbin.png");
//Matter.Body.setAngle(this.body,angle);
World.add(world, this.body);
}
display(){
var pos = this.body.position;
imageMode(CENTER);
image(this.image,pos.x,pos.y,this.width,this.height);
}
}
