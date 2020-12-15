class Ball{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
    
        }
        this.body=Bodies.circle(100,200,20,options);
        this.radius=20;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("red");
        circle(pos.x,pos.y,40);
    }
}