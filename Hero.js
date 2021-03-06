class Hero {
    constructor(x,y, width, height, angle){
        var options ={
            isStatic:true,
            density: 1, 
      frictionAir: 0.005
        };
        this.image = loadImage("superhero_image.jpg")
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image, 0,0, this.width, this.height);
        pop();

    }





}